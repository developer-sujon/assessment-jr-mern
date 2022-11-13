//External Lib Import
import React from "react";
import { Suspense } from "react";

//Internal Lib Import
import Layout from "../Layout";
import Loding from "../common/Loding";
const TodoList = React.lazy(() => import("../components/TodoList"));

function TodoListPage() {
  return (
    <Layout>
      <Suspense fallback={<Loding />}>
        <TodoList />
      </Suspense>
    </Layout>
  );
}

export default TodoListPage;
