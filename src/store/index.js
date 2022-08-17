import { createStore } from "redux";
//import { configureStore } from '@reduxjs/toolkit'

const conuterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "increase") {
    return { counter: state.counter + action.amount };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(conuterReducer);

//to connect app.js to react store
export default store;
