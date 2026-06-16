import React, { useState } from "react";
function Counter() {
  // Declare state variable 'count' with initial value 0
  const [count, setCount] = useState(0);
  return (
    <div style={{ margin: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}
export default Counter;
