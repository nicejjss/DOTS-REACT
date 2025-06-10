import './App.css'
import { GameState } from './constants/GameState'
import PlayScene from './scenes/mainscene/playscene/PlayScene'
import StartScene from './scenes/mainscene/startscene/StartScene'
import { useSelector } from 'react-redux'
import PauseScene from './scenes/overlayscene/pausescene/OverScene.jsx'
import OverScene from './scenes/overlayscene/overscene/OverScene.jsx'

function App() {
  const gameState = useSelector(state => state.gameState.value);

  return (
    <>
      {gameState === GameState.PLAY ? <PlayScene /> : <StartScene />}
      {gameState === GameState.PAUSE && <PauseScene />}
      {gameState === GameState.GAME_OVER && <OverScene />}
    </>
  )
}

export default App
