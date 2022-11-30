import React from "react";
import styled from "styled-components";
import 'animate.css'

function PokemonModal({ open, Data }) {
  if (open,Data)
    return (
      <ModalStyle  >
       <h1>{Data.types[0].type.name}</h1>
      </ModalStyle>
      
    );
}

export default PokemonModal;
const ModalStyle = styled.div`
  h1{
    color:black;
  }
  
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: white;
  .Modal-Cardfire{
  background: rgb(253,76,90);
  background: linear-gradient(90deg, rgba(253,76,90,1) 0%, rgba(171,31,35,1) 55%);
  }
`;
