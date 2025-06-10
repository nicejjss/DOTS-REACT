import './Setting.css'
import { backgroundMusicIntance } from '../../controller/Audio/BackgroundMusic.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { setVolume } from '../../redux/store/BackgroundMusic.jsx'


const handlePlay = () => backgroundMusicIntance.play();

const Setting = () => {
    const backgroundMusicVolumn = useSelector(state => state.backgroundMusicVolumn.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="menu-item flex-row justify-content-space-between">
                <span className="label">BACKGROUND MUSIC</span>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={backgroundMusicVolumn}
                    onInput={(e) => {
                        dispatch(setVolume(e.target.value));
                        handlePlay();
                    }}
                    className="input"
                    id="background-music"
                />
            </div>
            <div className="menu-item flex-row justify-content-space-between">
                <span className="label">DOTS SOUND</span>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    defaultValue="0"
                    className="input" name="" id="dot-sound" />
            </div>
        </div>
    )
}

export default Setting;