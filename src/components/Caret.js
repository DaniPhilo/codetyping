import React from 'react';
import '../assets/styles/Caret.css';

export default function Caret({ caretPosition }) {

    return (
        <div id='caret' style={{left: `${caretPosition[0]}px`, top: caretPosition[1]}}></div>
    )
}



