import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'


function CardPokemon(url) {
  const urlPoke = url.url
  const [DataPokemon , setDataPokemon] = useState([]);
  
  useEffect(()=>{
  try {
    axios.get(urlPoke).then((response) => {
      const pokemonInfo = response.data;
      setDataPokemon(pokemonInfo);
      console.log(pokemonInfo)
    });
  } catch (error) {
    console.log(`erro ${error}`)
  }
    
  }, []);
  
  return (
    <PokemonStyle>
      {DataPokemon ? DataPokemon.map((dataPokemon)=>{
        return (
          <div key={dataPokemon.id} className='pokemon-Card'>
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