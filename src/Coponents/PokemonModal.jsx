import React from "react";
import styled from "styled-components";
import 'animate.css'

function PokemonModal({ open, Data }) {
  
  if (!open) null;
  else
  console.log(`Dado dentro do componente${name}`)
    return (
      <ModalStyle className="animate__animated animate__bounceInDown">
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
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #000000c5;
`;
