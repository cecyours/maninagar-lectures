import React from 'react'

function ReactEvent() {
    const click = () => {
        alert("Hello!");
    }

  return (
    <div>
      <button onClick={click}>Click Me</button>
    </div>
  )
}

export default ReactEvent
