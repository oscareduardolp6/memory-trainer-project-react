import { useState } from 'react'

export const useApp = (inialState, nexFase) => {
  const [state, setState] = useState(inialState); 
  const setNumberOfWords = (numberOfWords) => setState({
    ...state, numberOfWords: numberOfWords
  }); 
  const addWord = (word) =>{
    console.log(`Palabras recordadas hasta ahora`, state.rememberedWords);
    const words = [...state.rememberedWords, word]; 
    console.log(`words: ${words}`);
    setState({
      ...state, 
      rememberedWords: words,
    })
    console.log(state);
    state.rememberedWords.length === inialState.numberOfWords && nexFase()
  } 
  return [
    state, 
    setNumberOfWords, 
    addWord
  ]
}