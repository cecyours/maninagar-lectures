import React, { useState } from "react"; 
 
function TextInput() { 
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
      <h2>You typed: {text}</h2> 
    </div> 
  ); 
} 
 
export default TextInput;