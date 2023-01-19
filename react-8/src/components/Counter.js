import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment, setCounter } from "../slices/counterSlice";

export function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const onIncHandler = () => {
    dispatch(increment());
  };

  const onDecHandler = () => {
    dispatch(decrement());
  };

  const onSetCounterHandler = () => {
    dispatch(setCounter(+input));
  };

  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={onIncHandler}>increment</button>
        <button onClick={onDecHandler}>decrement</button>
      </div>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={onSetCounterHandler}>set counter</button>
      </div>
    </div>
  );
}
