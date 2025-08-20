import React, { useState } from "react";

const Arithmactic = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [oprator, setOprator] = useState("+");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const first = parseInt(num1);
    const second = parseInt(num2);

    let ans = 0;

    if (oprator === "+") {
      ans = first + second;
    } else if (oprator === "-") {
      ans = first - second;
    } else if (oprator === "*") {
      ans = first * second;
    } else if (oprator === "/") {
      ans = first / second;
    }

    setResult(ans);
  };
  return (
    <div className="container p-5 rounded-4 mt-5 shadow-lg ">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="d-flex gap-4">
            <input
              type="number"
              placeholder="Enter one number"
              className="form-control"
              name="num1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />

            <select
              value={oprator}
              className="form-select"
              onChange={(e) => setOprator(e.target.value)}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>

            <input
              type="number"
              placeholder="Enter one number"
              className="form-control"
              name="num2"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>

          <div className="text-center ">
            <button
              className="w-25  btn btn-success mt-5  btn-sm"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        {result !== null && (
          <h1 className="text-center text-success fw-bold mt-4">{result}</h1>
        )}
      </div>
    </div>
  );
};

export default Arithmactic;
