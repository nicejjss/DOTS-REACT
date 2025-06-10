import { configureStore } from '@reduxjs/toolkit'
import gameStateReducer from './GameState'
import backgroundMusicReducer from './BackgroundMusic' // Uncomment if you have a background music reducer

const store = configureStore({
    reducer: {
        gameState: gameStateReducer,
        backgroundMusicVolumn: backgroundMusicReducer, // Uncomment if you have a background music reducer
    }
})

export { store }