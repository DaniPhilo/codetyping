import React from 'react';
import '../assets/styles/Caret.css';

export default function Caret({ caretPosition }) {

    console.log(caretPosition, typeof caretPosition);
    const style = `left: ${caretPosition}`;

    return (
        <div id='caret' style={{left: caretPosition}}></div>
    )
}



