import { useDispatch, useSelector } from "react-redux"
import Setting from "../../../components/setting/Setting"
import GameTitle from "./GameTitle/GameTitle"
import { setGamePlay } from "../../../redux/store/GameState"
import './StartScene.css'
import {
    setCurrentDots
} from '../../../redux/store/GameManager'
import { useRef, useEffect } from "react" 

const StartScene = () => {
    const dispatch = useDispatch();
    const currentDots = useSelector(state => state.gameManager.currentDots);
    const dotInput = useRef(null);

    const handleDotInput = () => {
        console.log("handleDotInput called", dotInput.current.value);
        dispatch(setCurrentDots(Number(dotInput.current.value)));
    }

    const handleStart = () => {
        handleDotInput();
        dispatch(setGamePlay());
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                handleStart();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <div className="menu-background">
                <div id="circle-1" className="cicrle"></div>
                <div id="circle-2" className="cicrle"></div>
                <div id="circle-3" className="cicrle"></div>
                <div id="circle-4" className="cicrle"></div>
                <div id="circle-5" className="cicrle"></div>
            </div>
            <ul className="menu-components flex-collumn max-width-500" id="menu-list">
                <GameTitle />
                <Setting />
                <li id="item-number" className="menu-item flex-row justify-content-space-between">
                    <span className="label">DOT NUMBER</span>
                    <input defaultValue={currentDots} ref={dotInput} min="0" className="input input-text" type="number" id="dot-number" />
                </li>
                <li className="menu-item flex-row justify-content-center">
                    <button id="btn-start" className="btn"
                        onClick={() => 
                            handleStart()
                        }>START</button>
                </li>
            </ul>
        </>
    )
}

export default StartScene