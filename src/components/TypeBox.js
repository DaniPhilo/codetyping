import React from 'react';
import '../assets/styles/TypeBox.css'

export default function TypeBox({ text }) {

    const splitText = text.split(' ');

    return (
        <section className="typebox-section">
            <label htmlFor="input-box">Type:</label>
            <div className="text-container">
                <div className="words-container">
                    {splitText.map(word => {
                        return <div className='word'>{word}</div>
                    })}
                </div>
                <div className='input-container'>
                    <textarea name="input-box" id="input-box" cols="90" rows="10"></textarea>
                </div>
            </div>

        </section>
    )
}
