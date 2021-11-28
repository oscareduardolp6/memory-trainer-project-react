import { useFase } from './hooks/useFase'
import { NumberOfWordsSelector } from './components/NumberOfWordsSelector'
import { Center } from './components/Center'
import { Card } from './components/Card'
import { useApp } from "./hooks/useApp";
import { WordsSelector } from './components/WordsSelector';
import { ComparationView } from './components/ComparationView'
import { palette1 } from './style/palette';
import './App.css';


function App() {
  const initialState = {
    numberOfWords: 0,
    rememberedWords: []
  }

  const resetButtonStyle = {
    backgroundColor: palette1.fourth
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
    <div className="main-content">
      <Card>
        <Center style={ {marginTop: '25%'} }>
          <h1 className='App-title'>Entrenador de Memoria</h1>
          {fase === 1 ? <NumberOfWordsSelector setWords={setNumberOfWords} updateFase={nextFase}/> : null}
          {fase === 2 ? <WordsSelector addWord={addWord} /> : null}
          {fase === 3 ? <ComparationView wordsArray={data.rememberedWords} /> : null }
        </Center>
      </Card>  
      <button onClick={reset} className='resetButton' style={resetButtonStyle}>Reiniciar</button>
    </div>      
  )
}

export default App;
