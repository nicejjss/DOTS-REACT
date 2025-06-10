import { dotMusic } from "../../constants/Music.jsx";
import { Music } from "./Music.jsx";

export class Dot extends Music {
    constructor() {
        super(dotMusic['name'], dotMusic['src']);
        this.music.addEventListener('ended', () => {
            this.destroy(); // Clean up after the sound finishes
        });
    }
}