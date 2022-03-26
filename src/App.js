import React from "react";
import Counter from "./components/Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

//the inital value for our state
const initialState = { count: 0 };

//the redux store (where state lives) requires a reducer as a way to return the state from the store
function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return { count: (state.count += 1) };
    case "DECREMENT":
      return { count: (state.count -= 1) };
    case "RESET":
      return { count: (state.count = 0) };
    default: {
      return state;
    }
  }
}

//creates the redux 'store' and associated reducer
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
