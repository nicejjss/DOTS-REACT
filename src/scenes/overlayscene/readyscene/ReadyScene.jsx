import { setGamePlay } from '../../../redux/store/GameState';
import './ReadyScene.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


const ReadyScene = () => {
    const [count, setCount] = useState(4);
    const dispatch = useDispatch();

    useEffect(() => {
        if (count >= 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            dispatch(setGamePlay());
        }
    }, [count]);

    return (
        <div id="ready-background" className="position-absolute-screen">
            <div id="ready-text" className="stroke">Ready!!!</div>
            <div id="ready-count" className="stroke">{count <= 3 ? count: ''}</div>
        </div>
    )
}

export default ReadyScene