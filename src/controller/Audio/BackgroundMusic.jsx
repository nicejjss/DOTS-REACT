import { backgroundMusic } from "../../constants/Music.jsx";
import { Music } from "./Music.jsx";

//Singleton
class BackgroundMusic extends Music {
    //private
    static instance;
    constructor() {
        super(backgroundMusic['name'], backgroundMusic['src']);
        this.music.loop = true; // Loop the background music
    }

    static getInstance() {
        if (BackgroundMusic.instance == null) {
            BackgroundMusic.instance = new BackgroundMusic();
        }
        return BackgroundMusic.instance;
    }
}

export { BackgroundMusic };
export const backgroundMusicIntance = BackgroundMusic.getInstance();