import { victory } from "../../constants/Music.jsx";
import { Music } from "./Music.jsx";

export class Victory extends Music {
    constructor(name = victory['name'], src = victory['src']) {
        super(name, src);
    }
}