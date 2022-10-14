import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/TypeBox.css';

import Word from './Word';

export default function TypeBox({ text }) {

    const splitText = text.split(' ');

    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [userInput, setUserInput] = useState(null);

    const wordList = useRef([]);
    const addWordRef = (ref) => wordList.current.push(ref);

    const letterList = useRef([]);
    const addLetterRef = (ref) => letterList.current.push(ref);

    const handleKeyDown = (event) => {
        const correct = splitText[wordIndex][letterIndex] === event.key;
        if (correct) {
            
        }
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
                    return (
                        <div key={i} ref={addWordRef} className={i === wordIndex ? 'word current' : 'word'}>
                            {word.split('').map((letter, i) => {
                                return <p key={i} ref={addLetterRef} className='letter'>{letter}</p>
                            }
                            )}
                        </div>
                    )
                })}
            </div>

        </section>
    )
}
