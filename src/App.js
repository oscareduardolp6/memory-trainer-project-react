import { useFase } from './hooks/useFase'
import { useState } from 'react';
import { NumberOfWordsSelector } from './components/NumberOfWordsSelector'
import { Center } from './components/Center'
import { Card } from './components/Card'
import './App.css';

const useApp = (inialState) => {
  const [state, setState] = useState(inialState); 
  const setNumberOfWords = (numberOfWords) =>  setState({ numberOfWords: numberOfWords, ...state})
  return [
    state, 
    setNumberOfWords
  ]
}

function App() {
  const initialState = {
    numberOfWords: 0,
  }
  const [fase, nextFase, reset] = useFase(); 
  const [data, setNumberOfWords ] = useApp(initialState); 
  return (
    <div>
      <Card>
        <Center style={ {marginTop: '5%'} }>
          <h1 className='App-title'>Entrenador de Memoria</h1>
          {fase === 1 ? <NumberOfWordsSelector setWords={setNumberOfWords} /> : null}
        </Center>
      </Card>
    </div>
  );
}

export default App;
