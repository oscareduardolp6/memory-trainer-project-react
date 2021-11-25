import useForm from '../hooks/useForm';
import { Center } from './Center'
import { Input } from './Input';
import { SubmitButton } from './SubmitButton';

export const NumberOfWordsSelector = ({ setWords, updateFase }) => {
  const initialState = { numberOfWords: 1 }
  const [form, handleChange] = useForm(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    setWords(form.NumberOfWords)
    updateFase()
  }

  return(
      <form onSubmit={handleSubmit}>
        <Center>
        <Input 
          label='¿Cuántas palabras quieres recordar?'
          type='number' 
          min={1}
          name='numberOfWords' 
          value={form.numberOfWords} 
          onChange={handleChange} 
          required />
        <SubmitButton>Guardar</SubmitButton>
        </Center>
      </form>
  )
}