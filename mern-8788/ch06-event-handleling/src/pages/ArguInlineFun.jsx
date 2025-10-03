import React from 'react'

function Synthetic() {
    function click(name) {
        console.log("Hello " + name);
        
    }
  return (
    <div>
        <button onClick={() => click("Tanvi")}>One Click Me</button>
        <button onClick={() => click("Darji")}>Two Click Me</button>
    </div>
  )
}

export default Synthetic
