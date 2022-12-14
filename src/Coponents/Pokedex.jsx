import React,{useState} from "react";
import CardPokemon from "./CardPokemon";
import Page from "./Page";
import PokedexStyle from "../style/PokedexStyle";
import PokemonModal from '../Coponents/PokemonModal'
import { useEffect } from "react";

function Pokedex(props) {
  const { page, totalPages, Pokemons, LeftClick, RightClick } = props;
  const [PokemonSinglePage, setPokemonSinglePage] = useState([]);
  
  
  const PokemonSingleData = async (pokemonSingle)=>{
     setPokemonSinglePage(pokemonSingle)
}
  useEffect(()=>{
      PokemonSingleData()
  },[])

  return (
    <div>
      <PokedexStyle>
        <Page
          page={page + 1}
          totalPages={totalPages}
          LeftClick={LeftClick}
          RightClick={RightClick}
        />
        <div className="pokemons">
          {!Pokemons ? (
            <div>
              <h1>Carregando...</h1>
            </div>
          ) : (
            Pokemons.map((pokemon) => {
              return <CardPokemon DataPokemon={PokemonSingleData} key={pokemon.id} pokemon={pokemon} />;
            })
          )}
        </div>
      </PokedexStyle>
      { PokemonSinglePage? 
      (<PokemonModal  Data={PokemonSinglePage} />) 
        

                                                     : null
      }
    </div>
  );
}

export default Pokedex;
