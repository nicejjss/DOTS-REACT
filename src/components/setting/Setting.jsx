import './Setting.css'
import { backgroundMusicIntance } from '../../controller/Music/BackgroundMusic.jsx'
import { useSelector, useDispatch } from 'react-redux'
import {
  setBackgroundMusicVolume,
  setDotSoundVolume
} from '../../redux/store/GameManager.jsx'
import { useEffect } from 'react';
import { Dot } from '../../controller/Music/Dot.jsx';
import { createAndPlay } from '../../utils/Music/music.jsx';


const handlePlay = () => backgroundMusicIntance.play();

const Setting = () => {
    const backgroundMusicVolumn = useSelector(state => state.gameManager.backgroundMusicVolume);
    const dotSoundVolume = useSelector(state => state.gameManager.dotSoundVolume);
    const dispatch = useDispatch();
    console.log(backgroundMusicVolumn, dotSoundVolume);
    
    useEffect(() => {
        backgroundMusicIntance.changeVolume(backgroundMusicVolumn);
    }, [backgroundMusicVolumn]);

    useEffect(() => {
        createAndPlay(new Dot(), dotSoundVolume);
    }, [dotSoundVolume]);

    return (
        <div>
            <div className="menu-item flex-row justify-content-space-between">
                <span className="label">BACKGROUND MUSIC</span>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    defaultValue={backgroundMusicVolumn}
                    onInput={(e) => {
                        dispatch(setBackgroundMusicVolume(e.target.value));
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
                    defaultValue={dotSoundVolume}
                    onMouseUp={(e) => {
                        dispatch(setDotSoundVolume(e.target.value));
                    }}
                    className="input" name="" id="dot-sound" />
            </div>
        </div>
    )
}

export default Setting;