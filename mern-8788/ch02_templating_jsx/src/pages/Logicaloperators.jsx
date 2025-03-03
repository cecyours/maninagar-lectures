import React, { useState } from "react";

function Logicaloperators() {
  const [marks, setMarks] = useState(1);
  const [letter, setLetter] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(true);
  /* 
    AND : &&
    OR : ||
    NOT : !
  */

  const handleAndCheck = () => {
    if (marks >= 33 && marks <= 100) {
      setMessage("congo.. exam passed");
    } else {
      setMessage("Better Luck next time");
    }
  };

  const handleOrCheck = () => {
    if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
      setMessage("Alphabet");
    } else if (letter >= "0" && letter <= "9") {
      setMessage("Digit");
    } else {
      setMessage("Special Symbol");
    }
  };

  return (
    <div>
      <div>
        <h2>Logical AND : &&</h2>
        <hr />
        <div className="border p-2 rounded-3">
          <div className="row">
            <div className="col">
              <div className="d-flex gap-3">
                <input
                  className="form-control"
                  value={marks}
                  onChange={(e) => {
                    setMarks(e.target.value);
                  }}
                />
                <button className="btn-success btn" onClick={handleAndCheck}>
                  Check
                </button>
              </div>
            </div>
            <div className="col d-flex align-items-center">
              {marks} | {message}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2>Logical OR : ||</h2>
        <hr />
        <div className="border p-2 rounded-3">
          <div className="row">
            <div className="col">
              <div className="d-flex gap-3">
                <input
                  className="form-control"
                  value={letter}
                  onChange={(e) => {
                    if (e.target.value.length > 1) return;
                    setLetter(e.target.value);
                  }}
                />
                <button className="btn-success btn" onClick={handleOrCheck}>
                  Check
                </button>
              </div>
            </div>
            <div className="col d-flex align-items-center">{message}</div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2>Logical NOt : !</h2>
        <hr />

        <div className="d-flex p-2 gap-4 align-items-center">
          <button
            className="btn btn-warning"
            onClick={(e) => {
              setFlag(!flag);
            }}
          >
            {flag ? "Hide" : "Show"}
          </button>

          {flag && <div>Hello World</div>}
        </div>
      </div>
    </div>
  );
}

export default Logicaloperators;
