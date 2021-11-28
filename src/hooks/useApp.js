import { useState } from 'react'

export const useApp = (inialState, nextFase) => {
  const [state, setState] = useState(inialState); 
  const setNumberOfWords = (newNumberOfWords) => {
    setState({
      ...state, 
      numberOfWords: Number(newNumberOfWords)
    });
  }
  const addWord = (word) =>{
    const words = [...state.rememberedWords, word]; 
    setState({
      ...state, 
      rememberedWords: words,
    })
    state.rememberedWords.length === (state.numberOfWords - 1) && nextFase()
  } 
  return [
    state, 
    setNumberOfWords, 
    addWord
  ]
}