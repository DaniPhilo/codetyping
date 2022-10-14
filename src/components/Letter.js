import React from 'react';
import '../assets/styles/Letter.css'

export default function Letter({letter}) {
    return (
        <p className='letter'>{letter}</p>
    )
}