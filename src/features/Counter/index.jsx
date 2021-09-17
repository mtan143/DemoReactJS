import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
    </div>
  );
}

export default CounterFeature;
