// import { createStore } from "redux";
const redux = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COUNTER = "SET_COUNTER";

/**
 * action = {
 *  type: ... - строка описывающая название события
 *  payload: string/number/object/... - данные, которые нам надо использовать в reducer
 * }
 */

// 1. CREATE REDUCER
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };

    case DECREMENT:
      return { ...state, value: state.value - 1 };

    case SET_COUNTER:
      return { ...state, value: action.payload };

    default:
      return state;
  }
}
const store = redux.createStore(counterReducer);

// 2. LISTEN TO STORE CHANGES
store.subscribe(() => console.log(store.getState()));

// 3. DISPATCH ACTIONS
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });

store.dispatch({ type: SET_COUNTER, payload: 8 });
store.dispatch({ type: DECREMENT });
