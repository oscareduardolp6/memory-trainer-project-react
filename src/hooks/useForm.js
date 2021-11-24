import { useState } from "react";

const useForm = (initialState) => {
  const [formulario, setFormulario] = useState(initialState)
  const handleChange = (e) => setFormulario({
    ...formulario,
    [e.target.name]: e.target.value
  })
  const reset = () => setFormulario(initialState)
  return [formulario, handleChange, reset]; 
}

export default useForm; 