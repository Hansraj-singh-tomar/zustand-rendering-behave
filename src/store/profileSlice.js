import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    info: { name: "Hansraj", age: 25 },
    todos: ["Learn React", "Learn Redux"],
  },
  reducers: {
    incrementAge: (state) => {
      state.info.age += 1;
    },
    changeProfileName: (state, action) => {
      state.info.name = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { incrementAge, changeProfileName, addTodo } = profileSlice.actions;
export default profileSlice.reducer;
