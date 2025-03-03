import React, { useState } from "react";
import Counter from "../components/Counter";

function DemoReadPassProps() {
  const [value, setValue] = useState(0);
  const onIncrement = () => {
    // setValue(value+1);
    setValue((v) => v + 1);
  };

  const onDecrement = () => {
    setValue((v) => v -1);
  };
  return (
    <div>
      <h1>DemoReadPassProps</h1>

      <Counter number={value} onPlusBtn={onIncrement} onMinus={onDecrement} />
    </div>
  );
}

export default DemoReadPassProps;
