import { createStore } from "redux";
//import { configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true };

const conuterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
    // need to concern all the individual state objects because we return the complete state object
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }
  return state;
};

const store = createStore(conuterReducer);

//to connect app.js to react store
export default store;
