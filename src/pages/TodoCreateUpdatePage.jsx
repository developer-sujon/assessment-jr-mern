//External Lib Import
import React from "react";
import { Suspense } from "react";

//Internal Lib Import
import Layout from "../Layout";
import Loding from "../common/Loding";
const TodoCreateUpdate = React.lazy(() =>
  import("../components/TodoCreateUpdate"),
);

const TodoCreateUpdatePage = () => {
  return (
    <Layout>
      <Suspense fallback={<Loding />}>
        <TodoCreateUpdate />
      </Suspense>
    </Layout>
  );
};
<TodoCreateUpdate />;
export default TodoCreateUpdatePage;
