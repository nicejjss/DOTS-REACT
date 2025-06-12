import { createSlice } from '@reduxjs/toolkit';

// musicSlice.js (using Redux Toolkit)
const initialState = {
  backgroundMusicVolume:  0,
  victoryVolume: 0.4,
  dotSoundVolume: 0.4,
  dots: 0,
  currentDots: 0,
  sec: 0,
  miliSec: 0,
  currentSec: 0,
  currentMiliSec: 0
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
    },
    addSec(state) {
      state.sec += 1;
    },
    addMiliSec(state) {
      state.miliSec += 1;
    },
    setCurrentSec: (state, action) => {
      state.currentSec = action.payload;
    },
    setCurrentMiliSec: (state, action) => {
      state.currentMiliSec = action.payload;
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
  setMiliSec,
  addSec,
  addMiliSec,
  setCurrentSec,
  setCurrentMiliSec
} = gameManagerSlice.actions;
export default gameManagerSlice.reducer;
