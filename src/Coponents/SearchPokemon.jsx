import React, {useState} from 'react';
import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";
import {SearchPokemonApi} from '../Coponents/Api'


function SearchPokemon() {
   
   const [search, setSearch] = useState("ditto")
   const [Pokemon , setPokemon] = useState()


   const HandleChange = (e)=>{
     let texto = e.target.value;
     setSearch(texto)
   }
  const onButtomClick =  ()=>{
    onSearchHandler(search)
  }
  const onSearchHandler = async (pokemon)=>{
    const data = await SearchPokemonApi(pokemon)
    setPokemon(data)
  }


    return (
    <SearcheStyle>
       <div>
         <input className='input-text' type="text" placeholder='Buscar Pokemon...' onChange={HandleChange}></input>
       </div>
       <div>
         <button className='input-btn' onClick={onButtomClick}><BiSearch className='btn-img' /></button>
       </div>
       <div className='pokemon'>{Pokemon ? (
         <div>
             <div><h1>Nome:{Pokemon.name}</h1></div>
             <div><h1>Peso:{Pokemon.weight}</h1></div>
             <img src={Pokemon.sprites.front_default} alt={Pokemon.name}></img>
         </div>
       ):null}
       </div>
    </SearcheStyle>
        
  )
}

export default SearchPokemon;
const SearcheStyle = styled.div`
width: 50%;
display: flex;
justify-content: center;
height: 30%;
 .input-text{
    display: inline-block;
    height: 2rem;
    border-radius: 7px 0px 0px 7px;
    border: 0px;
    background-color: yellow;
    text-align: center;
    outline: 0;
    
 }
 
 .input-btn{
    display: inline-block;
    height: 2rem;
    width:2rem;
    border-radius: 0px 7px 7px 0px;
    border: 0px;
    background-color: #3761A8;
    margin-left: 2px;
    .btn-img{
        color: white;
    }
 }

.pokemon{
    display: block;
}
@media (max-width: 600px){
  width: 60%;
}
@media (max-width: 900px){
  width: 60%;
}
`;