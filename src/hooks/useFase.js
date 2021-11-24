import { useState } from 'react';

export const useFase = (initialFase = 1) => {
  const [fase, setFase] = useState(initialFase);
  const nextFase = () => setFase(fase + 1); 
  const reset = () => setFase(initialFase); 
  return [fase, nextFase, reset]; 
}