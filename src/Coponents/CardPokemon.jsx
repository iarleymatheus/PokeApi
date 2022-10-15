import React from 'react';
import styled from 'styled-components'



function CardPokemon(props) {
 const {pokemon} = props
  
  return (
    <PokemonStyle key={pokemon.id}> 
          <div key={pokemon.id} className='pokemon-Card'>
              <div className='pokemon-info'>
                <p>{pokemon.name}</p>
                <h3></h3>
                <div className="power">
                  <div className="power1"></div>
                  <div className="power2"></div>
                </div>
             </div>
          </div>
    </PokemonStyle>
  )
}

export default CardPokemon;
const PokemonStyle = styled.div`
   width: 250px;
   height: 160px;
   border: 1px solid black;
   

`;