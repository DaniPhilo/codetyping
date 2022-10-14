import React from 'react';
import '../assets/styles/Word.css';

import Letter from './Letter';

export default function Word({ word }) {

    const wordSplit = word.split('');

    return (
        <div className="word">
            {wordSplit.map((letter, i) => <Letter key={i} letter={letter}/>)}
        </div>
    )
}