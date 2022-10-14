import React from 'react';
import '../assets/styles/TypeBox.css';

import Word from './Word';

export default function TypeBox({ text }) {

    const splitText = text.split(' ');

    return (
        <section className="typebox-section">
            <label>Type:</label>
            <div className='input-container'>
                <input name="user-input" id='user-input' />
            </div>
            <div className="text-container">
                {splitText.map((word, i) => {
                    return <Word key={i} word={word} />
                })}
            </div>
            
        </section>
    )
}
