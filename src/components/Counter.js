import React, { useEffect } from 'react';
import '../assets/styles/Counter.css';

export default function Counter({ gameStarted, setGameStarted, countDown, setCountDown, setIsGameOver }) {


    if (gameStarted && countDown > 0) {
        setTimeout(() => setCountDown(countDown - 1), 1000);
    }
    useEffect(() => {
        if (countDown === 0) {
            setGameStarted(false);
            setIsGameOver(true);
        }
    }, [countDown]);


    return (
        <div>
            <div className='counter'>{countDown}</div>
        </div>

    )
}