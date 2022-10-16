import React, { useState } from 'react';
import '../assets/styles/Main.css';

import TypeBox from './TypeBox';

const Texts = require('../services/db/texts.json');

export default function Main() {

  const defaultText = Texts[0].text;
  const [text, setText] = useState(defaultText);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userResults, setUserResults] = useState([]);

  

  return (
    <main>
      <TypeBox text={text} isGameOver={isGameOver} setIsGameOver={setIsGameOver} setUserResults={setUserResults} />
    </main>
  )
}
