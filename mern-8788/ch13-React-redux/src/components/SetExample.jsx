import React, { useState } from "react";
import { Set } from "immutable";

const SetExample = () => {
  const [numbers, setNumbers] = useState(Set([1, 2, 3]));

  const addNumber = () => {
    setNumbers(numbers.add(4));
  };

  return (
    <div>
      <h2>Numbers</h2>
      <p>{numbers.toJS().join("  ,   ")}</p>
      <button onClick={addNumber}>Add 4</button>
    </div>
  );
};

export default SetExample;
