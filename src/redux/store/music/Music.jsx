import { createSlice } from '@reduxjs/toolkit'
import { Music } from '../../../constants/Music'

const musicSlice = createSlice({
    name: 'music',
    initialState: {
      value: Music.PLAY
    },
    reducers: {
        setPlay: (state) => {
            console.log(state.value)
            state.value = Music.PLAY
        },
        setPause: (state) => {
            console.log(state.value)
            state.value = Music.PAUSE
        },
    }
  })

  export const { setPlay, setPause } = musicSlice.actions

  export default musicSlice.reducer