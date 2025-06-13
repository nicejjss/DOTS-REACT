import { setGameStart } from "../../../redux/store/GameState"
import { useDispatch, useSelector } from "react-redux";
import './OverScene.css';
import { calculateDotSpeed } from '../../../utils/Dot/dot';

const OverScene = () => {
    const dispatch = useDispatch();
    const currentDots = useSelector(state => state.gameManager.currentDots);
    const currentSec = useSelector(state => state.gameManager.currentSec);;
    const currentMiliSec = useSelector(state => state.gameManager.currentMiliSec);
    const dots = useSelector(state => state.gameManager.dots);
    const sec = useSelector(state => state.gameManager.sec);
    const miliSec = useSelector(state => state.gameManager.miliSec);

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

    return (
        <div id="ready-background" className="position-absolute-screen">
            <div id="over" className="position-absolute-screen menu-components max-width-500 list-style-none">
                <p id="label" >RECORDS</p>
                <table id="records">
                    <thead>
                        <tr>
                            <td className="text-align-left"></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="best-record">
                            <td className="text-align-left">Best</td>
                            <td id="record-speed">{savedSpeed} d/s</td>
                        </tr>
                        <tr id="current-record">
                            <td className="text-align-left">Current</td>
                            <td id="current-speed">{currentSpeed} d/s</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => dispatch(setGameStart())} className="btn" id="re-play">Return to Menu</button>
            </div>
        </div>
    )
}

export default OverScene