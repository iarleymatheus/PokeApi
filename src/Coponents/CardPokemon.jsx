import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'


function CardPokemon(props) {
  const urlPoke = props.url;
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
      {!DataPokemon ? <p>Carregando....</p> : DataPokemon.map((Pokemon)=>{
                          return (
                            <div key={Pokemon.id} className='pokemon-Card'>
                                <div className='pokemon-info'>
                                  <p>{Pokemon.name}</p>
                                  <h3></h3>
                               </div>
                            </div>
        )  

      })}
    </PokemonStyle>
  )
}

export default CardPokemon;
const PokemonStyle = styled.div`
   width: 250px;
   height: 160px;
   border: 1px solid black;
   

`;