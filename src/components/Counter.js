import React from 'react';
import '../assets/styles/Counter.css';

export default function Counter({ countDown, setCountDown }) {


    return (
        <div>
            <div className='counter'>{countDown}</div>
        </div>

    )
}