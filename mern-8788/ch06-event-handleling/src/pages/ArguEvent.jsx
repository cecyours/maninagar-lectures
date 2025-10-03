import React from 'react'

function ArguEvent() {
    function click(name , event) {
        console.log("Hello " + name);
        console.log("Event Type: " , event.type);
        
    }
  return (
    <div>
        <button onClick={(event) => click("Tanvi", event)}>Click Me</button>
    </div>
  )
}

export default ArguEvent
