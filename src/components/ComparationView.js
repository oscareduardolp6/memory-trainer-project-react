import { useState } from "react"
import useForm from "../hooks/useForm"
import { ComparationAnswer } from "./ComparationAnswer"
import { SubmitButton } from "./SubmitButton"
import { Center } from "./Center"

import './ComparationView.css'

export const ComparationView = ({wordsArray}) =>{
  let initialState = {}
  let initialColors = []; 
  wordsArray.forEach((element, index) => {
    initialState[`word${index}`] = ''
    initialColors[index] = ''
  })
  const [form, handleChange] = useForm(initialState)
  const [color, setColor] = useState(initialColors); 
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newColors = wordsArray.map((elem, index) => 
      elem.toUpperCase() === form[`word${index}`].toUpperCase()
        ? 'correct' 
        : 'incorrect')
    setColor(newColors); 
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <div className='answersContainer'>
          {wordsArray.map((word, index) => 
            <ComparationAnswer 
              key={`word${index}`}
              label={`Palabra ${index + 1}`}
              type='text'
              name={`word${index}`}
              value={form[`word${index}`]}
              onChange={handleChange}
              className={color[index]}
              style={{width: '80%'}}  /> )}
        </div>
      </div>
      <Center>
        <SubmitButton>Comparar</SubmitButton>
      </Center>
    </form>
  )
}