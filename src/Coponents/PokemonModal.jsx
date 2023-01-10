import React from "react";
import styled from "styled-components";
import 'animate.css';

function PokemonModal(props) {
  const {Data} = props;
  
  console.log(Data)

  return (
   <ModalStyle>
   {Data ? <div>
    <h1>{Data.name}</h1>
    <h2>{Data.id}</h2>
    <h2>{Data.height}</h2>
    {Data.types[0].type.name ? <h2>{Data.types[0].type.name}</h2> : <h1>Não tem tipo</h1>}
   </div> : null} 
   </ModalStyle> 
    
  )}
  


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
