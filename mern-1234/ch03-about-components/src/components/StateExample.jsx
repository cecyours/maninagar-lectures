import React, { useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState(-5);

  const handledecrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="">
      <button
        className="bg-danger btn mb-3 mt-3 text-light"
        onClick={handledecrement}
      >
        Decrement
      </button>

      <div>{count}</div>
      <button
        className="bg-success btn mt-3 text-light"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default StateExample;
