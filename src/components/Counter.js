import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions.js";

function Counter(props) {
  //we can call the reducer (used to modify state) using the 'dispatch' method of the store(which takes an 'action')
  const incrementCounter = () => {
    props.dispatch(increment());
  };

  const decrementCounter = () => {
    props.dispatch(decrement());
  };

  const resetCounter = () => {
    props.dispatch(reset());
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrementCounter}>-</button>
        <span>{props.count}</span>
        <button onClick={incrementCounter}>+</button>
      </div>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

//export the 'connected' Counter component (rather than just the Component)
export default connect(mapStateToProps)(Counter);
