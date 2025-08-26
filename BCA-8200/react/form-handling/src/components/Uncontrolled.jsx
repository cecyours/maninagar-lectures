import React, { useRef } from "react";

const Uncontrolled = () => {
  const myRef = useRef();

  function handleClick() {
    console.log(myRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={myRef} />

      {/* DOM */}

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Uncontrolled;
