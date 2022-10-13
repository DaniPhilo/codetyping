import React, { useState } from 'react';
import '../assets/styles/Main.css';

import TypeBox from './TypeBox';

const Texts = require('../services/db/texts.json');

export default function Main() {

  const [text, setText] = useState(Texts);

  return (
    <main>
      <TypeBox text={text[0].text}/>
    </main>
  )
}
