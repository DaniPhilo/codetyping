import React from 'react';
import '../assets/styles/OptionsBox.css';

export default function OptionsBox({ setCountDown, setWpmRatio, isGameOver }) {

    const handleChange = (event) => {
        setCountDown(Number(event.target.value));
        setWpmRatio(60 / Number(event.target.value));
        if (isGameOver) return event.target.value = 15;
    }

    return (
        <div className='options-box'>
            <label htmlFor="select-countdown">Duration:</label>
            <select id="select-countdown" defaultValue={15} onChange={handleChange}>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
            </select>
        </div>
    )
}