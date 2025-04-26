import React from "react";

function Data() {
  const data = ["apple", "banana", "cherry", "Mango", "lemon"];
  return (
    <div>
      {data.map((item, i) => (
        <h1>{item}</h1>
        
      ))}
    </div>
  );
}

export default Data;
