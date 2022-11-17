import React from "react";
import CardPokemon from "./CardPokemon";
import Page from "./Page";
import PokedexStyle from "../style/PokedexStyle";

function Pokedex(props) {

  const {page,totalPages,Pokemons,LeftClick,RightClick} = props;
  
  
  return (
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
        ) :
        (
          Pokemons.map((pokemon) => {
            return <CardPokemon   key={pokemon.id} pokemon={pokemon} />
          })
          
        )
        
        }
      </div>
      
    </PokedexStyle>
    
     
  )
}

export default Pokedex;
