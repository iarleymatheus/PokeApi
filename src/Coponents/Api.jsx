export const SearchPokemonApi = async (pokemon)=>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(`erro:${error}`)
    }
}