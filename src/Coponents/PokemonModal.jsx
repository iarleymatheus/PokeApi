import React from "react";
import styled from "styled-components";

function PokemonModal({ open, Data }) {
  
  if (!open) null;
  else
  console.log(`Dado dentro do componente${name}`)
    return (
      <ModalStyle>
       <h1>{Data.name}</h1>
      </ModalStyle>
    );
}

export default PokemonModal;
const ModalStyle = styled.div`
  h1{
    color:white;
  }
  display: flex;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: black;
`;
