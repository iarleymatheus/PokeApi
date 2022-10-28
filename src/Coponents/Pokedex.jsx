import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CardPokemon from "./CardPokemon";
import Page from './Page';


function Pokedex() {
  const [page, setpage] = useState(0)
  const [totalPages, settotalPages] = useState(0)
  const [Pokemons, setPokemons] = useState([]);

  const intensPerPage = 30;
  const BuscarPokemons = async (offset= intensPerPage * page, limit = intensPerPage) => {
   
    const data = await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        return response.data;
      });
    const promises = data.results.map(async (pokemon) => {
      return await axios.get(pokemon.url).then((res) => res.data);
    });
    const results = await Promise.all(promises);
    setPokemons(results);
    console.log(results);
    settotalPages(Math.ceil(data.count / intensPerPage))
  };
  function LeftClick(){
     if(page > 0){
      setpage(page-1);
     }
  }
  function RightClick(){
     if(page+1 !== totalPages){
      setpage(page+1)
     }
  }

  useEffect(() => {
    BuscarPokemons();
    console.log("carregou");
  }, [page]);


  return (
    <PokedexStyle>
      <Page
      page={page+1}
      totalPages={totalPages}
      LeftClick={LeftClick}
      RightClick={RightClick}
      
      />
      <div className="pokemons">
        {!Pokemons ? (
          <div>
            <h1>Carregando...</h1>
          </div>
        ) : (
          Pokemons.map((pokemon) => {
            return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
          })
        )}
      </div>
    </PokedexStyle>
  );
}

export default Pokedex;

const PokedexStyle = styled.div`
  padding: 10px;

  .pokemons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 2em;
  }
  @media (max-width: 800px) {
    .pokemons {
      padding: 5px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 5px;
      grid-row-gap: 1em;
    }

    @media (max-width: 600px) {
      .pokemons {
        padding: 5px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 1em;
      }
    }
  }
`;
