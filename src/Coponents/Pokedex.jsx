import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CardPokemon from "./CardPokemon";

function Pokedex() {
  const [Pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`;
    axios.get(url).then((response) => {
      const pokemons = response.data;
      setPokemons(pokemons.results);
    });
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
               <CardPokemon url={pokemon.url} /> 
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
