import React,{useState} from "react";
import PokemonStyle from "../style/PokemonStyle";
import PokemonModal from "./PokemonModal";


function CardPokemon(props) {
  const { pokemon } = props;
  const [openModal, setOpenModal] = useState(false)
  const [cardClose, setcardClose] = useState(false)
  
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  function ShowModal(){
    setOpenModal(true)
    setcardClose(true)
  }
  return (
    <div className="container-pokedex">
   
   {
    !cardClose ? (
    <PokemonStyle key={pokemon.id}>
      <div onClick={ShowModal} key={pokemon.id} className={`pokemon-Card${pokemon.types[0].type.name}`}>
        <div className="pokemon-info">
          <h3>{`#00${pokemon.id}`}</h3>
          <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
          <div className='power'>
            <div className="power1">{pokemon.types.map((tipo)=>{
              return <li key={tipo.type.name}>{capitalizeFirstLetter(tipo.type.name)}</li>
              })}</div>
          </div>
        </div>
        <div  className="div-img">
          <img className="img-animate" src={pokemon.sprites.front_default}></img>
        </div>
      </div>
      
    </PokemonStyle >) :
    <PokemonModal open={openModal} />
  }
    </div>
    
  );
}

export default CardPokemon;
