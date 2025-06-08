import './Setting.css'

const Setting = () => {
    return (
        <div>
            <div className="menu-item flex-row justify-content-space-between">
        <span className="label">BACKGROUND MUSIC</span>
        <input className="input" type="range" name="" id="background-music" />
    </div>
    <div className="menu-item flex-row justify-content-space-between">
        <span className="label">DOTS SOUND</span>
        <input className="input" type="range" name="" id="dot-sound" />
    </div>
        </div>
    )
}

export default Setting;