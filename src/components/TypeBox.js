import React from 'react';
import '../assets/styles/TypeBox.css'

export default function TypeBox({ text }) {
    return (
        <section className="typebox-section">
            <label htmlFor="input-box">Type:</label>
            <div className='input-container'>
                <p>{text}</p>

                <textarea name="input-box" id="input-box" cols="90" rows="10"></textarea>
            </div>
        </section>
    )
}
