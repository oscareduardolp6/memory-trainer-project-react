import { options } from '../private/apiConfig'
import { Center } from "./Center"
import { useEffect, useState } from 'react'
import { SubmitButton } from './SubmitButton';

import './WordsSelector.css'

const getWord = async () => {
  const url = 'https://spanish-random-words.p.rapidapi.com/random'
  const myOptions = options
  const response = await fetch(url, myOptions)
  const json = await response.json();
  const word = await json.body.Word 
  return word 
}; 

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const WordsSelector = ({addWord}) => {
  const [state, setState] = useState('Cargando...'); 
  useEffect( () => getWord().then(setState), [])

  const saveWord = (e) => {
    e.preventDefault()
    addWord(state)
    getWord().then(setState)
  }

  const changeWord = (e) => {
    e.preventDefault(); 
    getWord().then(setState)
  }
  
  return (
    <>
      <form>
        <Center>
          <h1>{capitalize(state)}</h1>
          <div className="buttons">
            <SubmitButton onClick={changeWord}>Cambiar</SubmitButton>
            <SubmitButton onClick={saveWord}>Guardar</SubmitButton>
          </div>
        </Center>
      </form>
    </>
  )

}