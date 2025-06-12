import { createSlice } from '@reduxjs/toolkit'
import { GameState } from '../../constants/GameState'

const gameStateSlice = createSlice({
    name: 'gameState',
    initialState: {
      value: GameState.START
    },
    reducers: {
        setGameStart: (state) => {
            state.value = GameState.START
        },
        setGameReady: (state) => {
            state.value = GameState.READY
        },
        setGamePlay: (state) => {
            state.value = GameState.PLAY
        },
        setGamePause: (state) => {
            state.value = GameState.PAUSE
        },
        setGameResume: (state) => {
            state.value = GameState.RESUME
        },
        setGameOver: (state) => {
            state.value = GameState.OVER
        },
    }
  })

  export const { setGameStart, setGameReady, setGamePlay, setGamePause, setGameOver} = gameStateSlice.actions

  export default gameStateSlice.reducer