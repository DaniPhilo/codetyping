import React from "react";
import '../assets/styles/Results.css';

export default function Results({ userResults, setIsGameOver, setCountDown }) {

    const closeModal = () => {
        setIsGameOver(false);
        setCountDown(15);
    }

    return (
        <aside>
            <div className="results-container">
                <div className="accuracy-results-container">
                    <h3>Accuracy</h3>
                    <span className="accuracy-result">{userResults.accuracy}</span>
                </div>
                <div className="wpm-results-container">
                    <h3>WPM</h3>
                    <span className="wpm-result">{userResults.wpm}</span>
                </div>
                <button onClick={closeModal}>X</button>
            </div>
        </aside>
    )
}