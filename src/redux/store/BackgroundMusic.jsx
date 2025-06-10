import { createSlice } from '@reduxjs/toolkit'
import { backgroundMusicIntance } from '../../controller/Audio/BackgroundMusic';

const backgroundMusicSlice = createSlice({
    name: 'backgroundMusic',
    initialState: {
      value: 0
    },
    reducers: {
        setVolume: (state, action) => {
            state.value = Number(action.payload);
            backgroundMusicIntance.changeVolume(state.value);
        },
    }
  })

  export const { setVolume } = backgroundMusicSlice.actions

  export default backgroundMusicSlice.reducer