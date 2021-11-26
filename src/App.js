import { useFase } from './hooks/useFase'
import { NumberOfWordsSelector } from './components/NumberOfWordsSelector'
import { Center } from './components/Center'
import { Card } from './components/Card'
import { useApp } from "./hooks/useApp";
import { WordsSelector } from './components/WordsSelector';
import { ComparationView } from './components/ComparationView'
import './App.css';


function App() {
  const initialState = {
    numberOfWords: 0,
    rememberedWords: []
  }
  const [
    fase, 
    nextFase, 
    reset
  ] = useFase(1); 

  const [
    data, 
    setNumberOfWords,
    addWord 
  ] = useApp(initialState, nextFase); 

  return (
    <div>
      <Card>
        <Center style={ {marginTop: '25%'} }>
          <h1 className='App-title'>Entrenador de Memoria</h1>
          {fase === 1 ? <NumberOfWordsSelector setWords={setNumberOfWords} updateFase={nextFase}/> : null}
          {fase === 2 ? <WordsSelector addWord={addWord} /> : null}
          {fase === 3 ? <ComparationView wordsArray={data.rememberedWords} /> : null }
        </Center>
      </Card>  
    </div>      
  )
}

export default App;
