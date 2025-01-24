import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function PassingData() {
  const [counter, setCounter] = useState(0);
  function handleAdd() {
    setCounter((prev) => prev + 1);
  }
  function handleSub() {
    setCounter((prev) => prev - 1);
  }
  return (
    <div className="d-flex  gap-5">
      <div>
        <button className="btn btn-primary" onClick={handleAdd}>
          +
        </button>
      </div>
      {counter}
      <div>
        <button className="btn btn-primary" onClick={handleSub}>
          -
        </button>
      </div>
    </div>
  );
}

export default PassingData;
