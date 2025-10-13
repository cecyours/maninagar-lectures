import React, { useState } from "react"; 
 
function Doubler() { 
  const [num, setNum] = useState(1); 
 
  return ( 
    <div style={{ textAlign: "center", marginTop: "50px" }}> 
      <h1>Number Doubler</h1> 
      <h2>Value: {num}</h2> 
      <button onClick={() => setNum(num * 2)}>Double It</button> 
      <button onClick={() => setNum(1)}>Reset</button> 
    </div> 
  ); 
}
export default Doubler; 
