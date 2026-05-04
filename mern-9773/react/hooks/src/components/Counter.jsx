import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-3">
      <h2 className="mb-3">Counter: {count}</h2>

      <button
        className="btn btn-success me-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        className="btn btn-danger me-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;