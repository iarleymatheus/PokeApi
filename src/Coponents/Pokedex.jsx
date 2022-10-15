import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CardPokemon from "./CardPokemon";

function Pokedex() {
  const [Pokemons, setPokemons] = useState([]);

  const BuscarPokemons = async ()=>{
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`).then((response)=>{
        return response.data;
    })
    const promises = data.results.map(async (pokemon)=>{
        return await axios.get(pokemon.url).then((res)=>res.data)
    })
    const results = await Promise.all(promises);
    setPokemons(results)
    console.log(results)
  }


  useEffect(() => {
    BuscarPokemons();
    console.log('carregou')
  }, []);
  return (
    <PokedexStyle>
      <div className="menu-pages">
        <div>
          <h1>Pokedex</h1>
        </div>
        <div>Proximo anterior</div>
      </div>
      <div className="pokemons">
        {!Pokemons ? (
          <div>
            <h1>Carregando...</h1>
          </div>
        ) : (
          Pokemons.map((pokemon) => {
            return (

               <CardPokemon key={pokemon.id} pokemon={pokemon} /> 
            );
          })
        )}
      </div>
    </PokedexStyle>
  );
}

export default Pokedex;

const PokedexStyle = styled.div`
  .menu-pages {
    display: flex;
    justify-content: space-between;
  }
`;
