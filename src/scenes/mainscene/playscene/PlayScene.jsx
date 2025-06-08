import { useDispatch } from "react-redux"
import { setGameStart } from "../../../redux/store/gamestate/GameState"

const PlayScene = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Play Scene</h1>
            <button onClick={() => dispatch(setGameStart())}>Play</button>
        </div>
    )
}

export default PlayScene