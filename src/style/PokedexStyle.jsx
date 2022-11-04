import styled from "styled-components";
const PokedexStyle = styled.div`
  padding: 10px;

  .pokemons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 2em;
  }
  @media (max-width: 800px) {
    .pokemons {
      padding: 5px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 5px;
      grid-row-gap: 1em;
    }

    @media (max-width: 600px) {
      .pokemons {
        padding: 5px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 1em;
      }
    }
  }
`;
export default PokedexStyle;