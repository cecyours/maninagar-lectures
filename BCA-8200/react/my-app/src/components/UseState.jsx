import { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);

  const handleMinusClick = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const handlePlusClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Use State in react</h1>

      <button onClick={handleMinusClick} className="btn btn-secondary me-5">
        -
      </button>
      <div className="badge text-bg-danger fs-3"> {counter} </div>
      <button onClick={handlePlusClick} className="btn btn-secondary ms-5">
        +
      </button>

      {"🎉".repeat(counter)}
    </div>
  );
}

export default UseState;
