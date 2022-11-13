//External Lib Import
import { configureStore } from "@reduxjs/toolkit";

//Internal Lib Import
import TodoReducer from "../slice/TodoSlice";

const store = configureStore({
  reducer: {
    Todo: TodoReducer,
  },
});

export default store;
