import React, { useState, useRef } from 'react';
import '../assets/styles/TypeBox.css';

import Caret from './Caret';

export default function TypeBox({ text }) {

    const splitText = text.split(' ');

    const [letterIndex, setLetterIndex] = useState(0);
    const [caretPosition, setCaretPosition] = useState([]);

    const letterRefList = useRef([]);
    const addRef = (ref) => letterRefList.current.push(ref);

    const handleKeyDown = (event) => {
        const currentLetter = letterRefList.current[letterIndex];
        const lastLetter = letterRefList.current[letterIndex - 1];
        const nextLetter = letterRefList.current[letterIndex + 1];

        console.log(event.key)

        // First letter sets first word as current word
        if (letterIndex === 0) {
            currentLetter.parentElement.classList.add('current');
        }

        // Shift, Capslock, Control, Alt or Meta don't count as letters:
        if (event.key === 'Shift' || event.key === 'CapsLock' || event.key === 'Control' || event.key === 'Alt' || event.key === 'Meta') {
            return
        }

        // Spacebar moves current class to next word
        if (event.key === ' ' && !lastLetter.nextSibling) {
            console.log('spacebar on end of word');
            lastLetter.parentElement.classList.remove('current');
            currentLetter.parentElement.classList.add('current');
            return setCaretPosition([currentLetter.offsetLeft, currentLetter.offsetTop]);
        }

        // Backspace removes classes from letter only if word is current
        if (event.key === 'Backspace') {
            // If you are not in current word, or in the first letter, you cannot delete
            if (!lastLetter || lastLetter.parentElement.classList[1] !== 'current') return
            // If you are deleting a misplaced letter attached to the last letter of the word, it is removed and, eventually, the 'misplaced' class goes off too
            if (lastLetter.classList.contains('misplaced')) {
                console.log('backspace on misplaced');
                if (lastLetter.innerText.length === 2) {
                    lastLetter.classList.remove('misplaced');
                }
                lastLetter.innerText = lastLetter.innerText.slice(0, lastLetter.innerText.length - 1);
                // For some reason I don't understand, in this scenario caretPosition[0] is incremented DOUBLE the number I say. That's why I write half a letter, since it's going to double it
                return setCaretPosition(prev => [prev[0] -= 7.5, prev[1]]);
            }
            // Else, delete and move pointer back
            console.log('backspace');
            lastLetter.className = '';
            setLetterIndex(prev => prev -= 1);
            return setCaretPosition([lastLetter.offsetLeft, lastLetter.offsetTop]);
        }
        
        // If typing after word has ended, letters are appended to last word until you press spacebar
        if (currentLetter.parentElement.classList[1] !== 'current') {
            console.log('misplaced letter');
            lastLetter.classList.add('misplaced');
            lastLetter.innerHTML += event.key;
            // For some reason I don't understand, in this scenario caretPosition[0] is incremented DOUBLE the number I say. That's why I write half a letter, since it's going to double it
            return setCaretPosition(prev => [prev[0] += 7.5, prev[1]]);
        }


        // Check user input with current letter
        const correct = event.key === currentLetter.innerText;
        currentLetter.classList.add(correct ? 'correct' : 'incorrect');
        setLetterIndex(prev => prev += 1);

        // The caret moves to the next letter, except if it is the last one (it should wait for the spacebar then)
        if (!currentLetter.nextSibling) {
            console.log('last letter in word');
            // For some reason I don't understand, in this scenario caretPosition[0] is incremented DOUBLE the number I say. That's why I write half a letter, since it's going to double it
            return setCaretPosition(prev => [prev[0] += 7.5, prev[1]])
        }
        console.log('common letter');
        return setCaretPosition([nextLetter.offsetLeft, nextLetter.offsetTop]);
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
