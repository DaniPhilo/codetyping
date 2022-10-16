import React, { useState } from 'react';
import '../assets/styles/Main.css';

import OptionsBox from './OptionsBox';
import Counter from './Counter';
import TypeBox from './TypeBox';

const Texts = require('../services/db/texts.json');

export default function Main() {

  const defaultText = Texts[0].text;
  const [text, setText] = useState(defaultText);
  const [countDown, setCountDown] = useState(15);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userResults, setUserResults] = useState([]);



  return (
    <main>
      <OptionsBox countDown={countDown} setCountDown={setCountDown} />
      <Counter countDown={countDown} setCountDown={setCountDown} />
      <TypeBox text={text} isGameOver={isGameOver} setIsGameOver={setIsGameOver} setUserResults={setUserResults} />
    </main>
  )
}
