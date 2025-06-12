import { useDispatch, useSelector } from "react-redux"
import { setGamePause, setGameStart } from "../../../redux/store/GameState"
import './PlayScene.css'
import { useState, useEffect } from "react";
import { GameState } from "../../../constants/GameState";
import { addSec, addMiliSec, setMiliSec } from "../../../redux/store/GameManager";

const PlayScene = () => {
    const [currentDots, setCurrentDots] = useState(useSelector(state => state.gameManager.currentDots));
    const sec = useSelector(state => state.gameManager.sec);
    const miliSec = useSelector(state => state.gameManager.miliSec);
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState.value);

    // Start timer on mount
  useEffect(() => {
    if (gameState !== GameState.PLAY) return; // Only start timer if game is in PLAY state
    const interval = setInterval(() => {
      dispatch(addMiliSec());
    }, 10); // Every 10ms

    return () => clearInterval(interval); // Clear on unmount
  }, [gameState]);

  // Watch miliSec and update sec when needed
  useEffect(() => {
    if (gameState !== GameState.PLAY) return; // Only update sec if game is in PLAY state
    if (miliSec >= 100) {
      dispatch(addSec());
      dispatch(setMiliSec(0));
    }
  }, [miliSec, gameState]);

    return (
        <div>
            <div id="play" className="position-absolute-screen">
                <ul id="header-list" className="justify-content-space-around flex-row list-style-none">
                    <li className="header-item" id="dot-number">Dots: {currentDots}</li>
                    <li className="header-item" id="time">
                        <span id="time-second">{sec}</span>:<span id="time-milisecond">{miliSec.toString().padStart(2, '0')}</span></li>
                    <li onClick={() => dispatch(setGamePause())} className="header-item" id="pause-btn">Pause</li>
                </ul>
                <div id="dot-zone"></div>
            </div>
            <button onClick={() => dispatch(setGameStart())}>Play</button>
        </div>
    )
}

export default PlayScene