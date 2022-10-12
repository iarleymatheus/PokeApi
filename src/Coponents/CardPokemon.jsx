import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'


function CardPokemon(url) {
  const urlPoke = url;
  const [DataPokemon , setDataPokemon] = useState([]);
  
  useEffect(()=>{
  
    axios.get(urlPoke).then((response) => {
      const pokemonStatus = response.data;
      setDataPokemon(pokemonStatus);
      console.log(pokemonStatus)
    });
  }, []);
  
  return (
    <PokemonStyle>
      {DataPokemon ? DataPokemon.map((dataPokemon)=>{
        return (
          <div className='pokemon-Card'>
              <div className='pokemon-info'>
                <p>{dataPokemon.name}</p>
                <h3></h3>
                <div className="power">
                  <div className="power1"></div>
                  <div className="power2"></div>
                </div>
             </div>
          </div>
        )  

      }) : null }
    </PokemonStyle>
  )
}

export default CardPokemon;
const PokemonStyle = styled.div`
   width: 250px;
   height: 160px;
   border: 1px solid black;
   

`;