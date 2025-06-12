import './App.css'
import { GameState } from './constants/GameState'
import PlayScene from './scenes/mainscene/playscene/PlayScene'
import StartScene from './scenes/mainscene/startscene/StartScene'
import { useSelector } from 'react-redux'
import PauseScene from './scenes/overlayscene/pausescene/PauseScene.jsx'
import OverScene from './scenes/overlayscene/overscene/OverScene.jsx'
import ReadyScene from './scenes/overlayscene/readyscene/ReadyScene.jsx'


function App() {
  const gameState = useSelector(state => state.gameState.value);

  return (
    <>
      {gameState === GameState.START ? <StartScene/> : <PlayScene/>}
      {gameState === GameState.PAUSE && <PauseScene />}
      {gameState === GameState.OVER && <OverScene />}
      {gameState === GameState.READY && <ReadyScene />}
    </>
  )
}

export default App
