import React, { useState } from "react";

function Expressions() {
  const [history, setHistory] = useState(["2+4=10"]);

  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);

  const handleAdd = (e) => {
    var ans = parseFloat(number1) + parseFloat(number2);
    setHistory((prev) => [...prev, `${number1}+${number2} = ${ans}`]);
  };
  return (
    <div>
      <h1>Expressions</h1>

      <div className="row">
        <div className="col-md-6">
          <h2>Operators</h2>
          <div className="d-flex gap-2">
            <input
              className="form-control"
              value={number1}
              onChange={(e) => {
                setNumber1(e.target.value);
              }}
            />
            <input
              className="form-control"
              value={number2}
              onChange={(e) => {
                setNumber2(e.target.value);
              }}
            />
          </div>

          <div>
            <button className="btn" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h2>History</h2>
          {/* mapping */}
          {history.map((h, i) => (
            <div className="" key={i}>
              <div>{h}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expressions;
