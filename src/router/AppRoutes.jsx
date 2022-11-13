//external Lib  imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage";
import TodoCreateUpdatePage from "../pages/TodoCreateUpdatePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />}></Route>
      <Route
        path="/todo-create-update"
        element={<TodoCreateUpdatePage />}
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
