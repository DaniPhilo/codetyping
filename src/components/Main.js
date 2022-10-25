import React, { useState, useEffect } from 'react';
import '../assets/styles/Main.css';

import OptionsBox from './OptionsBox';
import Counter from './Counter';
import TypeBox from './TypeBox';
import Results from './Results';

const Texts = require('../services/db/texts.json');

export default function Main() {

  const defaultText = Texts[1].text;
  const [text, setText] = useState(defaultText);
  const [countDown, setCountDown] = useState(15);
  const [wpmRatio, setWpmRatio] = useState(4);
  const [gameStarted, setGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userResults, setUserResults] = useState({
    wordsTyped: 0,
    accuracy: 0,
    wpm: 0
  });

  return (
    <main>
      <OptionsBox setCountDown={setCountDown} setWpmRatio={setWpmRatio} isGameOver={isGameOver} />

      <Counter gameStarted={gameStarted} setGameStarted={setGameStarted} countDown={countDown} setCountDown={setCountDown} setIsGameOver={setIsGameOver} />
      
      <TypeBox text={text} gameStarted={gameStarted} setGameStarted={setGameStarted} isGameOver={isGameOver} setIsGameOver={setIsGameOver} setUserResults={setUserResults} wpmRatio={wpmRatio} />
      
      {isGameOver && <Results userResults={userResults} setIsGameOver={setIsGameOver} setCountDown={setCountDown}/>}
    </main>
  )
}
