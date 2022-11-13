//External Lib Import
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

//Internal Lib Import
import { RemoveTodo, ResetTodoFormValue } from "../redux/slice/TodoSlice";
import ToastMessage from "../helper/ToastMessage";

function TodoList() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 5;
  const pageCount = Math.ceil(data.length / itemPerPage);
  const pageInit = pageNumber * itemPerPage;

  let { TodoList } = useSelector((state) => state.Todo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ResetTodoFormValue());
  }, []);

  useEffect(() => {
    setData(TodoList);
  }, [TodoList]);

  const handelPageClick = async ({ selected }) => {
    setPageNumber(selected);
  };

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
              {data.length !== 0 ? (
                data.slice(pageInit, pageInit + itemPerPage).map((todo) => {
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
      <Row>
        <Col>
          <div className="pagination">
            <ReactPaginate
              previousLabel="<"
              nextLabel=">"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handelPageClick}
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
