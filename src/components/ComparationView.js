import { useState } from "react"
import useForm from "../hooks/useForm"
import { ComparationAnswer } from "./ComparationAnswer"
import './ComparationView.css'
import { SubmitButton } from "./SubmitButton"

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
    const newColors = wordsArray.map((elem, index) => elem === form[`word${index}`] ? 'correct' : 'incorrect')
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
      <SubmitButton>Comparar</SubmitButton>
    </form>
  )
}