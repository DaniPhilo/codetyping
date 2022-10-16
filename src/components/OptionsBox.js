import React, {useState} from 'react';
import '../assets/styles/OptionsBox.css';

export default function OptionsBox({countDown, setCountDown}) {

    const handleChange = (event) => {
        setCountDown(event.target.value);
    }
    

    return (
        <div className='options-box'>
            <label htmlFor="select-countdown">Time:</label>
            <select id="select-countdown" defaultValue={60} onChange={handleChange}>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
            </select>
        </div>
    )
}