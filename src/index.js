import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//
// import { createStore } from "redux";

// const defaultState = {
//   balance: 0,
// };

// const actionDeposit = {
//   type: "deposit",
//   amount: 500,
// };

// const actionWithdraw = {
//   type: "withdraw",
// };

// function account(state = defaultState, action) {
//   if (action.type === "deposit") {
//     return { balance: state.balance + 1 };
//   } else if (action.type === "withdraw") {
//     return { balance: state.balance - 1 };
//   }
//   return state;
// }

// //redux starts here
// const store = createStore(account);
// store.subscribe(() => {
//   console.log("state changed");
//   const state = store.getState();
//   console.log(state);
// });

// window.store = store;
// window.actionDeposit = actionDeposit;
// window.actionWithdraw = actionWithdraw;

// store.dispatch(actionDeposit);
// store.dispatch(actionDeposit);
// store.dispatch(actionDeposit);
// store.dispatch(actionDeposit);
// store.dispatch(actionWithdraw);
