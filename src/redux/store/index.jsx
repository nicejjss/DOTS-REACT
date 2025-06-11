import { configureStore } from '@reduxjs/toolkit'
import gameStateReducer from './GameState'
import gameManagerReducer from './GameManager'

const store = configureStore({
    reducer: {
        gameState: gameStateReducer,
        gameManager: gameManagerReducer
    }
})

export { store }