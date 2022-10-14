import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/TypeBox.css';

import Word from './Word';

export default function TypeBox({ text }) {
    
    const splitText = text.split(' ');
    
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [userInput, setUserInput] = useState(null);

    const handleKeyDown = (event) => {
        const correct = splitText[wordIndex][letterIndex] === event.key;
        console.log(correct);
        setLetterIndex(prev => prev += 1);
    }



    return (
        <section className="typebox-section">
            <label>Type:</label>
            <div className='input-container'>
                <input name="user-input" id='user-input' onKeyDown={handleKeyDown} />
            </div>
            <div className="text-container">
                {splitText.map((word, i) => {
                    return <Word key={i} word={word} setLetterIndex={setLetterIndex} active={i === wordIndex ? true : false} />
                })}
            </div>

        </section>
    )
}
