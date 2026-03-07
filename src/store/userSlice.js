import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John"
  },
  reducers: {
    changeName: (state) => {
      state.name = "Alex";
    }
  }
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;