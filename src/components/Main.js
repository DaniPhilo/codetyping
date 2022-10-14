import React, { useState } from 'react';
import '../assets/styles/Main.css';

import TypeBox from './TypeBox';

const Texts = require('../services/db/texts.json');

export default function Main() {

  const defaultText = Texts[0].text;
  const [text, setText] = useState(defaultText);

  return (
    <main>
      <TypeBox text={text} />
    </main>
  )
}
