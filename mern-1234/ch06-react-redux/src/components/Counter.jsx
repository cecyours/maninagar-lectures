import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>React-Redux Counter</h1>
      <button onClick={() => dispatch(decrement())}> - </button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
    </div>
  );
};

export default Counter;
