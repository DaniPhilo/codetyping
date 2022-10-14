import React, { useRef, useState } from 'react';
import '../assets/styles/Word.css';

// import Letter from './Letter';

export default function Word({ word, active, setLetterIndex }) {

    const letterList = useRef([]);

    const addRef = (ref) => letterList.current.push(ref);

    const wordSplit = word.split('');

    return (
        <div className={active ? 'word active' : 'word'}>
            {wordSplit.map((letter, i) => <p key={i} ref={addRef} className='letter'>{letter}</p>)}
        </div>
    )
}