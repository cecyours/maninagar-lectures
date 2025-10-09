import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Uncontrolled Component Example</h3>
      <input type="text" ref={inputRef} placeholder="Enter something" />
      <button type="submit">Submit</button>
    </form> 
  );
}

export default UncontrolledInput;
