import './PlayScene.css'
import HeadsUp from "./headsup/HeadsUp";
import Dot from "./Dot/Dot";
import { createAndPlay } from '../../../utils/Music/music';
import { Dot as DotSound } from '../../../controller/Music/Dot';
import { Victory } from '../../../controller/Music/Victory';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  setDots,
  setSec, setMiliSec
} from '../../../redux/store/GameManager'
import { setGameOver } from '../../../redux/store/GameState';
import { calculateDotSpeed } from '../../../utils/Dot/dot'
import { store } from '../../../redux/store/index';

const PlayScene = () => {
  const dispatch = useDispatch();

  // Only use local state for UI-specific values
  const [curtDots, setCurDots] = useState(store.getState().gameManager.currentDots);

  // Only useSelector for values you want to trigger re-render (if any)
  // const dotSoundVolume = useSelector(state => state.gameManager.dotSoundVolume);

  const dotClicked = () => {
    const state = store.getState();
    const dotSoundVolume = state.gameManager.dotSoundVolume;

    createAndPlay(new DotSound(), dotSoundVolume);
    setCurDots(prevDots => {
      const newDots = prevDots - 1;
      if (newDots <= 0) {

        // Get latest values from Redux store directly
        const victoryVolume = state.gameManager.victoryVolume;
        const currentDots = state.gameManager.currentDots;
        const currentSec = state.gameManager.currentSec;
        const currentMiliSec = state.gameManager.currentMiliSec;
        const dots = state.gameManager.dots;
        const sec = state.gameManager.sec;
        const miliSec = state.gameManager.miliSec;

        const currentSpeed = calculateDotSpeed(
          currentDots,
          currentSec,
          currentMiliSec
        );

        const savedSpeed = calculateDotSpeed(
          dots,
          sec,
          miliSec
        );

        if (savedSpeed === 0 || (currentSpeed > savedSpeed)) {
          dispatch(setDots(currentDots));
          dispatch(setSec(currentSec));
          dispatch(setMiliSec(currentMiliSec));
        }

        createAndPlay(new Victory(), victoryVolume);
        dispatch(setGameOver());
      }
      return newDots;
    });
  }

  return (
    <div>
      <div id="play" className="position-absolute-screen">
        <HeadsUp currentDots={curtDots} />
        <div id="dot-zone">
          <Dot dotClicked={dotClicked} />
        </div>
      </div>
    </div>
  )
}

export default PlayScene