import React from 'react';
import '../assets/styles/Caret.css';

export default function Caret({ caretPosition, caretAnimation }) {

    return (
        <div className={caretAnimation ? 'caret' : 'caret-off'} style={{ left: `${caretPosition[0]}px`, top: `${caretPosition[1]}px` }}></div>
    )
}



