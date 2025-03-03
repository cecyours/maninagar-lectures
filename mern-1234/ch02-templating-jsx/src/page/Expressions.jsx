import React, { useState } from "react";

function Expressions() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [sign, setSign] = useState();

  return (
    <div>
      <h2>Expression </h2>
      <div>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              value={a}
              onChange={(e) => {
                setA(e.target.value);
              }}
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              value={b}
              onChange={(e) => {
                setB(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <div className="d-flex gap-3">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSign("+");
                  setC(parseInt(a) + parseInt(b));
                }}
              >
                +
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSign("-");
                  setC(parseInt(a) - parseInt(b));
                }}
              >
                -
              </button>
              <button className="btn btn-primary">*</button>
              <button className="btn btn-primary">/</button>
              <button className="btn btn-primary">%</button>
            </div>
          </div>
        </div>

        <div className="my-5">
          {a}
          {sign}
          {b}={c}
        </div>
      </div>
    </div>
  );
}

export default Expressions;
