import React, { useRef } from "react";

function RefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Using useRef to Access DOM</h3>
      <input type="text" ref={inputRef} placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );    
}

export default RefExample;
