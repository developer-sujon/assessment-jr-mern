//External Lib Import
import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

//Internal Lib Import
import { RemoveTodo, ResetTodoFormValue } from "../redux/slice/TodoSlice";
import ToastMessage from "../helper/ToastMessage";

function TodoList() {
  let { TodoList } = useSelector((state) => state.Todo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ResetTodoFormValue());
  }, []);

  const removeTodo = (id) => {
    dispatch(RemoveTodo(id));
    ToastMessage.SuccessToast("Todo Delete Successful");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Todo List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Todo Id</th>
                <th>Todo Title</th>
                <th>Todo Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {TodoList.length !== 0 ? (
                TodoList.map((todo) => {
                  return (
                    <tr key={todo?._id}>
                      <td>{todo?._id}</td>
                      <td>{todo?.Title}</td>
                      <td>{todo?.Description}</td>
                      <td>
                        <Button
                          variant="warning"
                          className="me-2"
                          onClick={() =>
                            navigate(`todo-create-update?id=${todo?._id}`)
                          }
                        >
                          <AiFillEdit />
                        </Button>

                        <Button
                          variant="danger"
                          className="me-2"
                          onClick={() => removeTodo(todo?._id)}
                        >
                          <AiFillDelete />
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h5 className="text-center mt-2 ">Todo Not Found</h5>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
