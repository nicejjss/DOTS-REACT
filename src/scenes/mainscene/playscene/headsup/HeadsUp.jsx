import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { GameState } from "../../../../constants/GameState";
import { addCurrentSec, addCurrentMiliSec, setCurrentMiliSec } from "../../../../redux/store/GameManager";
import { setGamePause } from "../../../../redux/store/GameState";


const HeadsUp = ({currentDots}) => {
    const sec = useSelector(state => state.gameManager.currentSec);
    const miliSec = useSelector(state => state.gameManager.currentMiliSec);
    
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState.value);

    // Start timer on mount
  useEffect(() => {
    if (gameState !== GameState.PLAY) return; // Only start timer if game is in PLAY state
    const interval = setInterval(() => {
      dispatch(addCurrentMiliSec());
    }, 10); // Every 10ms

    return () => clearInterval(interval); // Clear on unmount
  }, [gameState]);

  // Watch miliSec and update sec when needed
  useEffect(() => {
    if (gameState !== GameState.PLAY) return; // Only update sec if game is in PLAY state
    if (miliSec >= 100) {
      dispatch(addCurrentSec());
      dispatch(setCurrentMiliSec(0)); // Reset miliSec to 0
    }
  }, [miliSec, gameState]);

    return (
        <ul id="header-list" className="justify-content-space-around flex-row list-style-none">
            <li className="header-item" id="dot-number">Dots: {currentDots}</li>
            <li className="header-item" id="time">
                <span id="time-second">{sec}</span>:<span id="time-milisecond">{miliSec.toString().padStart(2, '0')}</span></li>
            <li onClick={() => dispatch(setGamePause())} className="header-item" id="pause-btn">Pause</li>
        </ul>
    );
}

export default HeadsUp;
