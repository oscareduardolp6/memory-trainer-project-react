import useForm from "../hooks/useForm"
import { Input } from './Input'
import { ComparationAnswer } from "./ComparationAnswer"
import './ComparationView.css'

export const ComparationView = ({wordsArray}) =>{
  let initialState = {}
  wordsArray.forEach((element, index) => initialState[`word${index}`] = '')
  const [form, handleChange] = useForm(initialState)
  const divStyle = {
    display: 'flex' ,
    flexDirection: 'column', 
    marginLeft: '5em'
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('hola');
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
              className={index % 10 > 1 ? 'column1' : ''}
              style={{width: '80%'}}  /> )}
        </div>
      </div>
    </form>
  )

  return(
    <form>
      <div>
        <div className="answersContainer">
        {wordsArray.map((word, index) => (
          <div style={divStyle} key={`word${index}`}>
          <Input 
            label={`Palabra ${index + 1}`} 
            type="text" 
            name={`word${index}`} 
            value={form[`word${index}`]} 
            onChange={handleChange} 
            className={index % 10 > 1 ? 'column1': ''} 
            style={{width: '80%'}}/> 
          </div>))}
        </div>
      </div>
    </form>
  )
}