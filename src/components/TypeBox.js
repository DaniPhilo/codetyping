import React, { useState, useRef } from 'react';
import '../assets/styles/TypeBox.css';

// import Word from './Word';

export default function TypeBox({ text }) {

    const splitText = text.split(' ');

    const [letterIndex, setLetterIndex] = useState(0);
    const [misplacedLetters, setMisplacedLetters] = useState([]);

    const letterRefList = useRef([]);
    const addRef = (ref) => letterRefList.current.push(ref);

    const handleKeyDown = (event) => {
        const currentLetter = letterRefList.current[letterIndex];
        const lastLetter = letterRefList.current[letterIndex - 1];

        // First letter sets first word as current word
        if (letterIndex === 0) {
            currentLetter.parentElement.classList.add('current');
        }
        // Spacebar moves current class to next word
        if (event.key === ' ' && !lastLetter.nextSibling) {
            lastLetter.parentElement.classList.remove('current');
            return currentLetter.parentElement.classList.add('current');
        }
        // Backspace removes classes from letter only if word is current
        if (event.key === 'Backspace') {
            // If you are not in current word, or in the first letter, you cannot delete
            if (!lastLetter || lastLetter.parentElement.classList[1] !== 'current') return
            // Else, delete and move pointer back
            lastLetter.className = '';
            setLetterIndex(prev => prev -= 1);
            return
        }
        // If typing after word has ended, letters are appended to word until you press spacebar or backspace
        // I cannot so that... For now, it just does nothing
        if (currentLetter.parentElement.classList[1] !== 'current') {
            return
        }


        // Check user input with current letter
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
                                // if (i !== word.length - 1) {
                                    return <p key={index} ref={addRef}>{letter}</p>
                                // }
                                // else {
                                //     return <p key={index} ref={addRef}>{letter} + {misplacedLetters.map(misLet => <span>{misLet}</span>)}</p>
                                // }

                            }
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
