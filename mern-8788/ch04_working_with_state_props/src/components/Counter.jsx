import React from "react";

function Counter({ number, onPlusBtn, onMinus }) {
  return (
    <div className="d-flex gap-5 aling-items-center">
      <button className="btn btn-primary" onClick={onPlusBtn}>
        +
      </button>
      <div className={`py-2 fw-bold ${number > 10 ? "text-success" : "text-danger"}`}>
        {number}
      </div>
      <button className="btn btn-primary" onClick={onMinus}>
        -
      </button>
    </div>
  );
}

export default Counter;
