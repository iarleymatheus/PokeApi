import React from "react"
import NavBar from "./Coponents/NavBar"
import Pokedex from "./Coponents/Pokedex"
import styled from "styled-components"


function App() {


  return (
    <AppStyle className="app">
    <NavBar />
    <Pokedex/>
    </AppStyle>
  )
}
const AppStyle = styled.div`
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
background-attachment: fixed;
background-size: cover;


`;
export default App
