import React from "react";
import styled from "styled-components";
import SearchPokemon from "./SearchPokemon"


function NavBar() {
  
  const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    
    <NavBarStyle>
      <div>
        <img className="nav-img"
          alt="PokéAPI"
          src={logoImg}
        />
      </div>
      <SearchPokemon />
    </NavBarStyle>  
  );
}

export default NavBar;

const NavBarStyle = styled.nav`
height: 10vh;
width: 100%;
display: fixed;
justify-content: space-between;
align-items: center;
background-color:#8ECAE6 ;
  .nav-img{
    display: inline-block;
    height: 7vh;
    padding: 5px;
  }
  @media (max-width: 600px){
    .nav-img{
      height: 5vh;
    }
  }
`;