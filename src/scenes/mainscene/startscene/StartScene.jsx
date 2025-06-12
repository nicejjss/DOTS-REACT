import { useDispatch, useSelector } from "react-redux"
import Setting from "../../../components/setting/Setting"
import GameTitle from "./GameTitle/GameTitle"
import { setGameReady } from "../../../redux/store/GameState"
import './StartScene.css'
import {
    setCurrentDots,
    setCurrentSec,
    setCurrentMiliSec
} from '../../../redux/store/GameManager'
import { useRef, useEffect, useState } from "react"

const StartScene = () => {
    const dispatch = useDispatch();
    const currentDots = useSelector(state => state.gameManager.currentDots);
    const dotInput = useRef(null);
    const [errors, setError] = useState({});

    const handleDotInput = () => {
        dispatch(setCurrentDots(Number(dotInput.current.value)));
    }

    const handleStart = () => {
        const validationError = validateDotsNumber(dotInput.current.value);
        setError(validationError);

        if (Object.keys(validationError).length > 0) {
            return;
        }

        handleDotInput();
        dispatch(setCurrentSec(0));
        dispatch(setCurrentMiliSec(0));
        dispatch(setGameReady());
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                handleStart();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleInput = () => {
        const validationError = validateDotsNumber(dotInput.current.value);
        setError(validationError);
    }

    const validateDotsNumber = (value) => {
        let errors = {};

        if (value === '' || isNaN(value) || value <= 0) {
            errors.dots = 'Please enter a valid number of dots (more than 0).';
        }

        return errors;
    }


    const displayCircles = () => {
        const circles = [];
        const numberOfCircles = 5;

        for (let i = 1; i <= numberOfCircles; i++) {
            circles.push(
                <div key={`circle-${i}`} id={`circle-${i}`} className="circle"></div>
            );
        }

        return circles;
    }

    return (
        <>
            <div className="menu-background">
                {displayCircles()}
            </div>
            <ul className="menu-components flex-collumn max-width-500" id="menu-list">
                <GameTitle />
                <Setting />
                <li id="item-number" className="menu-item flex-row justify-content-space-between">
                    <span className="label">DOT NUMBER</span>
                    <input defaultValue={currentDots} ref={dotInput} min="0" className="input input-text" type="number" id="dot-number" onChange={() => handleInput()} />
                </li>
                {errors.dots && <span className="error-message">{errors.dots}</span>}
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