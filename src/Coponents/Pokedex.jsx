import React from "react";
import styled from "styled-components";

function Pokedex(props) {
  const Pokemons = props;
  
    return (
    <PokedexStyle>
      <div className='menu-pages'>
        <h1>Pokedex</h1>
        <p>Proximo</p>
      </div>
      {Pokemons ? Pokemons.map((pokemon)=>{
           return(<div>
             <h3>Name:{pokemon.name}</h3>
             <p>Url:{pokemon.url}</p>
           </div>)
      }):null}
    </PokedexStyle>
  );
}

export default Pokedex;

const PokedexStyle = styled.div`
  
  .menu-pages{
    display: flex;
    justify-content: space-between;
 
  }

`;
