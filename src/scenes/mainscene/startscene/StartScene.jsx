import { useDispatch } from "react-redux"
import Setting from "../../../components/setting/Setting"
import GameTitle from "./GameTitle/GameTitle"
import { setGamePlay } from "../../../redux/store/GameState"
import './StartScene.css'

const StartScene = () => {
    const dispatch = useDispatch();

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
                    <input min="0" className="input input-text" type="number" id="dot-number"/>
                </li>
                <li className="menu-item flex-row justify-content-center">
                    <button id="btn-start" className="btn" onClick={() => dispatch(setGamePlay())}>START</button>
                </li>
            </ul>
        </>
    )
}

export default StartScene