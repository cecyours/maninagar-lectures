import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("lightblue");

  const colors = ["lightblue", "lightgreen", "pink", "orange", "purple"];

  return (
    <div
      style={{
        backgroundColor: color,
        height: "200px",
        textAlign: "center",
        paddingTop: "50px",
        transition: "0.5s",
      }}
    >
      <h1>Background Color Changer</h1>
      <button
        onClick={() =>
          setColor(colors[Math.floor(Math.random() * colors.length)])
        }
      >
        Change Color
      </button>
    </div>
  );
}

export default ColorChanger;
