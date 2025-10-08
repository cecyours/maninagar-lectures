import React, { useState } from "react";

function RandomNumber() {
  const [num, setNum] = useState(Math.floor(Math.random() * 100));

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random Number Generator</h1>
      <h2>{num}</h2>
      <button onClick={() => setNum(Math.floor(Math.random() * 100))}>
        Generate New
      </button>
    </div>
  );
}

export default RandomNumber;
