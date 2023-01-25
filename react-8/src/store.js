import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import usersReducer from "./slices/usersSlice";
import labelsSlice from "./slices/labelsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    labels: labelsSlice,
  },
});
