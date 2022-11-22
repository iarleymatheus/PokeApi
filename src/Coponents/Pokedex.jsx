import React,{useState} from "react";
import CardPokemon from "./CardPokemon";
import Page from "./Page";
import PokedexStyle from "../style/PokedexStyle";
import PokemonModal from '../Coponents/PokemonModal'
import { useEffect } from "react";

function Pokedex(props) {
  const { page, totalPages, Pokemons, LeftClick, RightClick } = props;
  const [openModal, setOpenModal] = useState(false);
  const [PokemonSinglePage, setPokemonSinglePage] = useState([]);
  
  const PokemonSingleData = async (pokemonSingle)=>{
   await setPokemonSinglePage(pokemonSingle)
  }
  useEffect(()=>{
      PokemonSingleData()
      console.log(PokemonSinglePage)
  
  },[])

 console.log(PokemonSinglePage)

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
      (<PokemonModal open={openModal} Data={PokemonSinglePage} />) 
        

                                                     : null
      }
    </div>
  );
}

export default Pokedex;
