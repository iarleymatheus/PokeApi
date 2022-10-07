import React,{useEffect,useState} from "react"
import { GetPokemonsApi } from "./Coponents/Api";
import NavBar from "./Coponents/NavBar"
import Pokedex from "./Coponents/Pokedex"
import axios from 'axios'


function App() {
  const [Loadding , setLoadding] = useState(false)
  const [Pokemons,setPokemons] = useState([]);
 
//  const FetchingPokemon = async ()=>{
//     try {
//       const data = await GetPokemonsApi();
//       setPokemons(data.results)
//     } catch (error) {
//       console.log(`erro: ${error}`)
//     }
//  }
 
 
  useEffect( ()=>{
    let url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
    axios.get(url)
    
    
},[])

  return (
    <div>
    <NavBar />
    {/* <Pokedex Pokemons={Pokemons}/> */}
    {Pokemons ? Pokemons.map((pokemon)=>{
           return(<div>
             <h3>Name:{pokemon.name}</h3>
             <p>Url:{pokemon.url}</p>
           </div>)
      }):null}
    </div>
  )
}

export default App
