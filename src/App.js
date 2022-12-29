import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

const [buscaId, setBuscaId] = useState('');
console.log(buscaId)

const [buscaNome, setBuscaNome] = useState('');
console.log(buscaNome)

const [ordenaAlfabeto, setOrdenaAlfabeto] = useState('');

const [ordenarTipo, setOrdenarTipo] = useState('');

  return (
    <>
      <GlobalStyle />
      <Header
      buscaId={buscaId}
      setBuscaId={setBuscaId} 
      buscaNome={buscaNome}
      setBuscaNome={setBuscaNome}
      ordenaAlfabeto={ordenaAlfabeto}
      setOrdenaAlfabeto={setOrdenaAlfabeto}
      ordenarTipo={ordenarTipo}
      setOrdenarTipo={setOrdenarTipo}
      />
      <CardsContainer>
      {pokemons
      .filter((pokemon)=>{
        
        return pokemon.id.includes(buscaId)})
      .filter((pokemon) => {
        return pokemon.name.english.toLocaleLowerCase().includes(buscaNome.toLocaleLowerCase())})
      
      .sort((a,b)=>{
        if(ordenaAlfabeto==='crescente'){
          if (a.name.english < b.name.english){
            return -1
          } else{
            return 1
          } 
        } else if(ordenaAlfabeto==='decrescente') {
          if (a.name.english < b.name.english){
            return 1
          } else {
            return -1
          }

          }
    })
      
    .filter((pokemon)=>{
      return ordenarTipo ? pokemon.type.includes(ordenarTipo) : pokemon
    })
    

      .map((pokemon)=>{
        return <PokemonCard
        cardColor={getColors(pokemon.type[0])}
        key={pokemon.id}
        pokemon={pokemon}
        />
      })
        
        }
        

      </CardsContainer>
    </>
  );
}

export default App;