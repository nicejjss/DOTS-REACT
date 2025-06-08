import { configureStore } from '@reduxjs/toolkit'
import gameStateReducer from './gamestate/GameState'
import musicReducer from './music/Music'


const store = configureStore({
    reducer: {
        gameState: gameStateReducer,
        music: musicReducer
    }
})

export { store }