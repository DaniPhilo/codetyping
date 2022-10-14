import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/TypeBox.css';

// import Word from './Word';

export default function TypeBox({ text }) {

    const splitText = text.split(' ');

    const [letterIndex, setLetterIndex] = useState(0);

    const letterRefList = useRef([]);
    const addRef = (ref) => letterRefList.current.push(ref);

    const handleKeyDown = (event) => {
        const currentLetter = letterRefList.current[letterIndex];
        const lastLetter = letterRefList.current[letterIndex - 1];

        if (event.key === ' ' && !lastLetter.nextSibling) return

        // if (event.key === 'Backspace' && currentLetter != currentLetter.parentElement.firstChild) {
        //     console.log('backspace')
        //     lastLetter.className = '';
        //     setLetterIndex(prev => prev -= 1);
        //     return
        // }
        const correct = event.key === currentLetter.innerText;
        currentLetter.classList.add(correct ? 'correct' : 'incorrect');
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
                        <div key={i} className='word'>
                            {word.split('').map((letter, index) => {
                                return <p key={index} ref={addRef}>{letter}</p>
                            }
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
