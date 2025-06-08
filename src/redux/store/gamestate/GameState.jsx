import { createSlice } from '@reduxjs/toolkit'
import { GameState } from '../../../constants/GameState'

const gameStateSlice = createSlice({
    name: 'gameState',
    initialState: {
      value: GameState.START
    },
    reducers: {
        setGameStart: (state) => {
            console.log(state.value);
            state.value = GameState.START
        },
        setGamePlay: (state) => {
            console.log(state.value);
            state.value = GameState.PLAY
        },
    }
  })

  export const { setGameStart, setGamePlay } = gameStateSlice.actions

  export default gameStateSlice.reducer