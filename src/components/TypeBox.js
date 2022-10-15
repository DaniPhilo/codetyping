import React, { useState, useRef } from 'react';
import '../assets/styles/TypeBox.css';

import Caret from './Caret';

export default function TypeBox({ text }) {

    const splitText = text.split(' ');

    const [letterIndex, setLetterIndex] = useState(0);
    const [caretPosition, setCaretPosition] = useState(0);

    const letterRefList = useRef([]);
    const addRef = (ref) => letterRefList.current.push(ref);

    const handleKeyDown = (event) => {
        const currentLetter = letterRefList.current[letterIndex];
        const lastLetter = letterRefList.current[letterIndex - 1];
        const nextLetter = letterRefList.current[letterIndex + 1];

        // First letter sets first word as current word
        if (letterIndex === 0) {
            currentLetter.parentElement.classList.add('current');
        }
        // Spacebar moves current class to next word
        if (event.key === ' ' && !lastLetter.nextSibling) {
            lastLetter.parentElement.classList.remove('current');
            // setCaretPosition(prev => prev += 12);
            return currentLetter.parentElement.classList.add('current');
        }
        // Backspace removes classes from letter only if word is current
        if (event.key === 'Backspace') {
            // If you are not in current word, or in the first letter, you cannot delete
            if (!lastLetter || lastLetter.parentElement.classList[1] !== 'current') return
            // If you are deleting a misplaced letter attached to the last letter of the word, it is removed and, eventually, the 'misplaced' class goes off too
            if (lastLetter.classList.contains('misplaced')) {
                if (lastLetter.innerText.length === 2) {
                    lastLetter.classList.remove('misplaced');
                }
                return lastLetter.innerText = lastLetter.innerText.slice(0, lastLetter.innerText.length - 1);
            }
            // Else, delete and move pointer back
            lastLetter.className = '';
            return setLetterIndex(prev => prev -= 1);
        }
        // If typing after word has ended, letters are appended to last word until you press spacebar
        if (currentLetter.parentElement.classList[1] !== 'current') {
            lastLetter.classList.add('misplaced');
            return lastLetter.innerHTML += event.key;
        }


        // Check user input with current letter
        const correct = event.key === currentLetter.innerText;
        currentLetter.classList.add(correct ? 'correct' : 'incorrect');
        setCaretPosition(prev => nextLetter.offsetLeft);
        return setLetterIndex(prev => prev += 1);
    }

    return (
        <section className="typebox-section">
            <label>Type:</label>
            <div className='input-container'>
                <input name="user-input" id='user-input' onKeyDown={handleKeyDown} />
            </div>

            <div className="text-container">
                <Caret caretPosition={caretPosition}/>
                {splitText.map((word, i) => {
                    return (
                        <div key={i} className='word'>
                            {word.split('').map((letter, index) => {
                                return <p key={index} ref={addRef}>{letter}</p>
                            })}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
