import { createSlice } from '@reduxjs/toolkit';

// musicSlice.js (using Redux Toolkit)
const initialState = {
  backgroundMusicVolume:  0,
  victoryVolume: 0.4,
  dotSoundVolume: 0,
  dots: 0,
  currentDots: 0,
  sec: 0,
  miliSec: 0
};

const gameManagerSlice = createSlice({
  name: 'gameManager',
  initialState,
  reducers: {
    setBackgroundMusicVolume: (state, action) => {
      state.backgroundMusicVolume = Number(action.payload);
    },
    setVictoryVolume: (state, action) => {
      state.victoryVolume = Number(action.payload);
    },
    setDotSoundVolume: (state, action) => {
      state.dotSoundVolume = Number(action.payload);
    },
    setDots: (state, action) => {
      state.dots = action.payload;
    },
    setCurrentDots: (state, action) => {
      state.currentDots = Number(action.payload);
    },
    setSec: (state, action) => {
      state.sec = action.payload;
    },
    setMiliSec: (state, action) => {
      state.miliSec = action.payload;
    }
  }
});

export const {
  setBackgroundMusicVolume,
  setVictoryVolume,
  setDotSoundVolume,
  setDots,
  setCurrentDots,
  setSec,
  setMiliSec
} = gameManagerSlice.actions;
export default gameManagerSlice.reducer;
