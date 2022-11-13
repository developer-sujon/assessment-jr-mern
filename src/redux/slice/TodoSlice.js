import { createSlice } from "@reduxjs/toolkit";
import SessionHelper from "../../helper/SessionHelper";

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    TodoList: SessionHelper.GetTodo() || [],
    FormValue: {
      _id: "",
      Title: "",
      Description: "",
    },
  },
  reducers: {
    AddTodo: (state, action) => {
      state.TodoList.push({
        _id: new Date().getTime(),
        Title: action.payload.Title,
        Description: action.payload.Description,
      });
      SessionHelper.SetTodo(state.TodoList.map((item) => item));
    },
    EditTodo: (state, action) => {
      const id = action.payload;
      state.FormValue = state.TodoList.find((item) => item._id == id);
    },
    UpdateTodo: (state, action) => {
      const id = action.payload.id;
      const data = SessionHelper.GetTodo() || [];
      const index = state.TodoList.findIndex((item) => item._id == id);

      state.TodoList[index] = data[index] = {
        ...data[index],
        ...action.payload.FormValue,
      };

      SessionHelper.SetTodo(state.TodoList.map((item) => item));
    },
    RemoveTodo: (state, action) => {
      const id = action.payload;
      state.TodoList = state.TodoList.filter((item) => item._id !== id);
      SessionHelper.SetTodo(state.TodoList.map((item) => item));
    },
    OnChangeTodoInput: (state, action) => {
      state.FormValue[`${action.payload.Name}`] = action.payload.Value;
    },
    ResetTodoFormValue: (state, action) => {
      Object.keys(state.FormValue).forEach((i) => (state.FormValue[i] = ""));
    },
  },
});

export const {
  AddTodo,
  EditTodo,
  UpdateTodo,
  RemoveTodo,
  OnChangeTodoInput,
  ResetTodoFormValue,
} = TodoSlice.actions;
export default TodoSlice.reducer;
