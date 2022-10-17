import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CardPokemon from "./CardPokemon";

function Pokedex() {
  const [Pokemons, setPokemons] = useState([]);
  const [pageStatus , setPageStatus] = useState(0)

  const BuscarPokemons = async (offset=pageStatus ,limit=25)=>{
    
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then((response)=>{
    setPageStatus(pageStatus+25)    
     return response.data 
    })
    const promises = data.results.map(async (pokemon)=>{
        return await axios.get(pokemon.url).then((res)=>res.data)
    })
    const results = await Promise.all(promises);
    setPokemons(results)
    console.log(results)
  }
  
  function nextPage(){
     
     BuscarPokemons(pageStatus)   
  }
  function backPage(){
    BuscarPokemons(pageStatus-50)   
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
        <div onClick={backPage}>anterior</div>
        <div onClick={nextPage}>Proximo</div>
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
  padding: 20px;
  .menu-pages {
    display: flex;
    justify-content: space-between;
  }
  .pokemons{
   
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 2em;

  }
  @media (max-width: 800px){
  .pokemons{
 padding: 5px;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-column-gap: 5px;
 grid-row-gap: 1em;

 }


   @media (max-width: 600px){

.pokemons{
 padding: 5px;
 display: grid;
 grid-template-columns: repeat(1, 1fr);
 grid-column-gap: 5px;
 grid-row-gap: 1em;

 }
}
}

`;
