import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


function PokemonModal({open,NamePokemon}) {
 if(NamePokemon) axios.get(`https://pokeapi.co/api/v2/pokemon/${NamePokemon}`).then((response)=>{
    console.log(response)
  })
  if(!open) return null 
    return (

    <ModalStyle>
        <div className="ModalContainer">
            

     
        </div>
    </ModalStyle>
  )
}

export default PokemonModal;
const ModalStyle = styled.div`
position: relative;
z-index:3;
width: 100%;
height: 100vh;
background-color: black;
`;