import React, { useState } from 'react'

const KeyBord = () => {
    const [ word, setWord ] = useState("");

    const rosewin = (e) => {
        setWord(e.key);
    }
  return (
    <div>
        <input onKeyDown={(e) => rosewin(e)} />

        <h2>{word}</h2>
    </div>
  )
}

export default KeyBord
