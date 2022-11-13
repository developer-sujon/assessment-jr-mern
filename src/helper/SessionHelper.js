class SessionHelper {
  static SetTodo(Todo) {
    localStorage.setItem("Todo", JSON.stringify(Todo));
  }
  static GetTodo() {
    return JSON.parse(localStorage.getItem("Todo"));
  }
  static RemoveTodo() {
    return localStorage.removeItem("Todo");
  }
}

export default SessionHelper;
