import React, { useState } from "react";
function Counter() {
  const [coin, setCount] = useState(0);
  const handlePlus = () => {
    setCount((x) => x + 1);
  };
  return (
    <div>
      <div className="d-flex justify-content-center gap-2 align-items-center">
        <div>
          <button className="btn btn-primary" onClick={handlePlus}>
            +
          </button>
        </div>
        <input
          type="number"
          value={coin}
          onChange={(e) => {
            setCount(e.target.value);
          }}
          className="border-0 rounded-3 p-2"
        />
        {/* <button className="btn btn-primary" onClick={handleMinus}>    -        </button> */}
      </div>
    </div>
  );
}
export default Counter;
