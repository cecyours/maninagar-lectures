import React, { useState } from "react";

function TextInputULR() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Live Text Display</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ marginTop: "20px" }}>
        <h2>You typed: {text}</h2>
        <h3>Character Count: {text.length}</h3>
        <button onClick={() => setText(text.toUpperCase())}>UPPERCASE</button>
        <button onClick={() => setText(text.toLowerCase())}>lowercase</button>
        <button onClick={() => setText("")}>Clear</button>
      </div>
    </div>
  );
}

export default TextInputULR;
