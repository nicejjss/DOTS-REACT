import { dotMusic } from "../../constants/Music.jsx";
import { Music } from "./Music.jsx";

export class Dot extends Music {
    constructor() {
        super(dotMusic['name'], dotMusic['src']);
    }
}