import { useEffect, useState } from "react"
import { color } from "../../../../constants/Dot"

const GameTitle = () => {
    const [titleLetters, setTitleLetters] = useState([]);

    useEffect(() => {
        const letters = ['D', 'O', 'T', 'S'];
        const usedColors = new Set();
        
        const coloredLetters = letters.map(letter => {
            let textColor;
            do {
                textColor = Math.floor(Math.random() * color.length);
            } while (usedColors.has(textColor));
            
            usedColors.add(textColor);
            
            return {
                letter,
                color: color[textColor]
            };
        });

        setTitleLetters(coloredLetters);
    }, []);

    return (
        <li className="menu-item flex-row justify-content-center" id="game-title">
            {titleLetters.map(({ letter, color }, index) => (
                <span 
                    key={index}
                    className="stroke"
                    style={{ color }}
                >
                    {letter}
                </span>
            ))}
        </li>
    );
}

export default GameTitle;