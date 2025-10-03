import React from 'react'

function Synthetic() {
    function click(event) {
        console.log("Button click");
        console.log("Synthetic Event Object:", event);
        console.log("Synthetic Event :", event.type);
    }
  return (
    <div>
        <button onClick={click}>Click Me</button>
    </div>
  )
}

export default Synthetic
