import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoArray: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoArray.push(action.payload);
    },
    resetTodo: (state) => {
      state.todoArray = [];
    },
  },
});

export const { addTodo, resetTodo } = todoSlice.actions;
export default todoSlice.reducer;
