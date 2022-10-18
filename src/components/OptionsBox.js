import React from 'react';
import '../assets/styles/OptionsBox.css';

export default function OptionsBox({ setCountDown, setWpmRatio }) {

    const handleChange = (event) => {
        setCountDown(event.target.value);
        setWpmRatio(60 / event.target.value);
    }

    return (
        <div className='options-box'>
            <label htmlFor="select-countdown">Time:</label>
            <select id="select-countdown" defaultValue={3} onChange={handleChange}>
                <option value="3">3</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
            </select>
        </div>
    )
}