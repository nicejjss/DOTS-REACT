import Setting from "../../../components/setting/Setting"
import './PauseScene.css'
import { useDispatch } from "react-redux"
import { setGameReady, setGameStart } from "../../../redux/store/GameState"

const PauseScene = () => {
    const dispatch = useDispatch();

    return (
        <div id="ready-background" className="position-absolute-screen">
            <div id="pause" className="position-absolute-screen menu-components max-width-500">
                <div id="ready-text" className="stroke">PAUSE</div>
                <Setting />
                <div className="flex-row justify-content-space-around">
                    <button onClick={() => dispatch(setGameStart())} className="btn" id="btn-menu">Back To Menu</button>
                    <button onClick={() => dispatch(setGameReady())} className="btn" id="btn-continue">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default PauseScene