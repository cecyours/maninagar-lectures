import React from 'react'

function EventMulti() {
    const Click = () => {
        alert("You clicked the button! ✅");
    }

    const dbClick = () => {
        alert("You double-clicked the button! ⚡");
    }

    const hover = () => {
        alert("You hovered over the box! 👀");
    }

  return (
    <>
        <div 
            style={{width:"600px",height: "200px", background: "Blue", margin:"16px"}} 
            onMouseEnter={hover}>
        </div>

        <button 
            style={{color: "white", background:"green", margin:"16px"}} 
            onClick={Click}>
            Click Me
        </button>

        <button 
            style={{color: "white", background:"green", margin:"16px"}} 
            onDoubleClick={dbClick}>
            Double Click Me
        </button>
    </>
  )
}

export default EventMulti
