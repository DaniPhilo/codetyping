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
            currentLetter.parentElement.classList.add('current');
            return setCaretPosition(currentLetter.offsetLeft);
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
                lastLetter.innerText = lastLetter.innerText.slice(0, lastLetter.innerText.length - 1);
                return setCaretPosition(prev => prev -= 15);
            }
            // Else, delete and move pointer back
            lastLetter.className = '';
            setLetterIndex(prev => prev -= 1);
            return setCaretPosition(lastLetter.offsetLeft);
        }
        // If typing after word has ended, letters are appended to last word until you press spacebar
        if (currentLetter.parentElement.classList[1] !== 'current') {
            lastLetter.classList.add('misplaced');
            lastLetter.innerHTML += event.key;
            return setCaretPosition(prev => prev += 15);
        }
        // The caret moves to the next letter, except if it is the last one (it should wait for the spacebar then)


        // Check user input with current letter
        const correct = event.key === currentLetter.innerText;
        currentLetter.classList.add(correct ? 'correct' : 'incorrect');
        setLetterIndex(prev => prev += 1);
        if (!currentLetter.nextSibling) {
            return setCaretPosition(prev => prev += 15)
        }
        return setCaretPosition(nextLetter.offsetLeft);
    }

    return (
        <section className="typebox-section">
            <label>Type:</label>
            <div className='input-container'>
                <input name="user-input" id='user-input' onKeyDown={handleKeyDown} />
            </div>

            <div className="text-container">
                <Caret caretPosition={caretPosition} />
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
