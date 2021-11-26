import { useState } from 'react'

export const useApp = (inialState, nextFase) => {
  const [state, setState] = useState(inialState); 
  const setNumberOfWords = (newNumberOfWords) => {
    setState({
      ...state, 
      numberOfWords: Number(newNumberOfWords)
    });
    console.log(`${state.rememberedWords.length} es igual a ${state.numberOfWords}? ${state.rememberedWords.length == state.numberOfWords}`);
  }
  const addWord = (word) =>{
    console.log(`Palabras recordadas hasta ahora`, state.rememberedWords);
    const words = [...state.rememberedWords, word]; 
    console.log(`words: ${words}`);
    setState({
      ...state, 
      rememberedWords: words,
    })
    state.rememberedWords.length == (state.numberOfWords - 1) && nextFase()
  } 
  return [
    state, 
    setNumberOfWords, 
    addWord
  ]
}