import './App.css'
import { GameState } from './constants/GameState'
import PlayScene from './scenes/mainscene/playscene/PlayScene'
import StartScene from './scenes/mainscene/startscene/StartScene'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const gameState = useSelector(state => state.gameState.value);

  useEffect(() => {
    
  }, [])

  return (
    <>
      {gameState === GameState.PLAY ? <PlayScene /> : <StartScene />}
      {gameState === GameState.PAUSE && <PauseOverlay />}
      {gameState === GameState.GAME_OVER && <GameOverOverlay />}
      <AppComponents/>
    </>
  )
}

const playMusic = () => {
  const audio = new Audio(music)
  audio.play()
}

export default App
