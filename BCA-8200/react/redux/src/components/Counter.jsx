import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counterSlicer";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      Count is = {counter}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
