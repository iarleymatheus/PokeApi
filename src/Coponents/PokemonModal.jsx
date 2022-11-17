import React from 'react';
import styled from 'styled-components';


function PokemonModal({open}) {
  if(!open) null
  else
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