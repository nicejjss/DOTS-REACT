import { color } from '../../../../constants/Dot';

const getRandomPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min) + '%';
};

const Dot = ({dotClicked}) => {
    const width = '55px';
    const height = '55px';
    const limited = 85;

    const dotStyle = {
        position: 'absolute',
        width: width,
        height: height,
        backgroundColor: color[Math.floor(Math.random() * color.length)],
        top: getRandomPosition(10, limited),
        left: getRandomPosition(3, limited),
        borderRadius: '50%'
    };

    return <div onClick={() => dotClicked()} id="dot" style={dotStyle}></div>;
}

export default Dot;
