import React,{useState,useEffect} from "react"
import NavBar from "./Coponents/NavBar"
import Pokedex from "./Coponents/Pokedex"
import styled from "styled-components";
import axios from 'axios';



function App() {
  const [page, setpage] = useState(0);
  const [totalPages, settotalPages] = useState(0);
  const [Pokemons, setPokemons] = useState([]);


  const intensPerPage = 30;
 
  const BuscarPokemons = async (
    offset = intensPerPage * page,
    limit = intensPerPage
  ) => {
   
    const data = await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        return response.data;
      });
    const promises = data.results.map(async (pokemon) => {
      return await axios.get(pokemon.url).then((res) => res.data);
    });
    const results = await Promise.all(promises);
    setPokemons(results);
    settotalPages(Math.ceil(data.count / intensPerPage));
  };
 
 
  useEffect(() => {
    BuscarPokemons();
    console.log("carregou");
  }, [page]);
  function LeftClick() {
    if (page > 0) {
      setpage(page - 1);
    }
  }
  function RightClick() {
    if (page + 1 !== totalPages) {
      setpage(page + 1);
    }
  }
  return (
    <AppStyle className="app">
    <NavBar />
    <Pokedex
    page={page} 
    totalPages={totalPages}
    Pokemons={Pokemons}
    LeftClick={LeftClick}
    RightClick={RightClick}
    />
    </AppStyle>
  )
}
const AppStyle = styled.div`
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
background-attachment: fixed;
background-size: cover;
box-sizing: border-box;

`;
export default App
