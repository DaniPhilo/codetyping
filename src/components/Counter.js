import React, { useEffect, useState } from 'react';
import '../assets/styles/Counter.css';

export default function Counter({ gameStarted, setGameStarted, countDown, setCountDown, setIsGameOver }) {

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (gameStarted && countDown > 0) {
            setTimeout(() => setCountDown(countDown - 1), 1000);
        }
        else if (countDown === 0) {
            setGameStarted(false);
            setIsGameOver(true);
        }
    }, [gameStarted, countDown]);


    return (
        <div className='counter-container'>
            <div className='counter'>{countDown}</div>
        </div>

    )
}