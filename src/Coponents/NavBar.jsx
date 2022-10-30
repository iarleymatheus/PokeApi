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
height:10vh;
width: 100%;
display: fixed;
justify-content: flex-start;
align-items: center;
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  .nav-img{
    margin-right: 40px;
    margin-left: 5vh;
    display: inline-block;
    height: 5vh;
    padding: 1px;
  }
  @media (max-width: 600px){
    .nav-img{
      height: 3vh;
    }
  }
`;