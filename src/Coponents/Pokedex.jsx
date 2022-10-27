import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CardPokemon from "./CardPokemon";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";

function Pokedex() {
  const [Pokemons, setPokemons] = useState([]);
  const [pageStatus, setPageStatus] = useState(0);

  const BuscarPokemons = async (offset = pageStatus, limit = 25) => {
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
  };

  function nextPage() {
    BuscarPokemons(pageStatus);
    setPageStatus(pageStatus + 25);
    console.log(pageStatus);
  }
  function backPage() {
    BuscarPokemons(pageStatus);
    if (pageStatus === 0) {
      null;
    } else {
      setPageStatus(pageStatus - 25);
      console.log(pageStatus);
    }
  }
  useEffect(() => {
    BuscarPokemons();
    console.log("carregou");
  }, []);
  return (
    <PokedexStyle>
      <div className="menu-pages">
        <div className="arrow" onClick={backPage}>{<AiOutlineDoubleLeft />}</div>
        <div className="arrow" onClick={nextPage}>{<AiOutlineDoubleRight />}</div>
      </div>
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

  .menu-pages {
    height: 2rem;
    display: flex;
    width: 50px;
    justify-content: space-between;
    margin-bottom:1.2rem;
    margin-left: 5px;
     }
  svg{
     color: white;
     height: 60px;
  }
  svg:hover{
    width: 20px;
    text-decoration: overline;
  }
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
