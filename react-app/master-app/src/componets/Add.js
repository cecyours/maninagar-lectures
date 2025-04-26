import React, { useState } from "react";

function Add() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();

  const handleNum1Change = (e) => {
    console.log(e.target.value);
    setNum1(e.target.value);
  };
  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };
  const handleClick = (e) => {
    setNum3(parseInt(num1) + parseInt(num2));
  };
  return (
    <div>
      <div>
        <div className="d-flex gap-5">
          <input
            className="form-control"
            value={num1}
            onChange={handleNum1Change}
          />
          <input
            className="form-control"
            value={num2}
            onChange={handleNum2Change}
          />

          <input
            disabled
            className="form-control"
            value={num3}
            onChange={handleNum2Change}
          />
        </div>
        <div className="m-5">
          <button className="btn btn-danger" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
