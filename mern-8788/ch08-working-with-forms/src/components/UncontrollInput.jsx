import React, { useRef } from 'react'

function UncontrollInput() {

    const inputRef = useRef(null);

    const submitEvent = (e) => {
        e.preventDefault();
        alert(`You entered: ${inputRef.current.value}`)
    }


  return (
    <div>
      <form onSubmit={submitEvent}>
        <h3>Uncontrolled Component Example</h3>
        <input type="text" placeholder="Enter something" ref={inputRef}/>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default UncontrollInput
