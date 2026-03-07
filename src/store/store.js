import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    profile: profileReducer,
  }
});