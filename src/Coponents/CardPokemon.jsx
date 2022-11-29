import React,{useState,useEffect} from "react";
import PokemonStyle from "../style/PokemonStyle";
import 'animate.css';



function CardPokemon(props) {
  const { pokemon, DataPokemon } = props;
  const [Ative, setAtive] = useState(true)
  

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const ReturnData = ()=>{
     DataPokemon(pokemon)
  }
  function OnLoad(){
    setTimeout(() => {
      setAtive(false);
    }, 1000)
  }
 
  return (
    <div onClick={ReturnData} className="container-pokedex ">
      {
        <PokemonStyle onLoad={OnLoad} className={Ative ? "animate__animated animate__backInDown":''} key={pokemon.id}>
          <div
            key={pokemon.id}
            className={`pokemon-Card${pokemon.types[0].type.name}`}
          >
            <div className="pokemon-info">
              <h3>{`#00${pokemon.id}`}</h3>
              <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
              <div className="power">
                <div className="power1">
                  {pokemon.types.map((tipo) => {
                    return (
                      <li key={tipo.type.name}>
                        {capitalizeFirstLetter(tipo.type.name)}
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="div-img">
              <img
                className="img-animate"
                src={pokemon.sprites.front_default}
              ></img>
            </div>
          </div>
        </PokemonStyle>
      }
    </div>
  );
}

export default CardPokemon;
