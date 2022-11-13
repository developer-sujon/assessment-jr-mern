//External Lib Import
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Internal Lib Import
import { useNavigate } from "react-router-dom";
import FormValidaion from "../helper/FormHelper";
import ToastMessage from "../helper/ToastMessage";

import {
  AddTodo,
  EditTodo,
  OnChangeTodoInput,
  ResetTodoFormValue,
  UpdateTodo,
} from "../redux/slice/TodoSlice";

const TodoCreateUpdate = () => {
  const dispatch = useDispatch();
  let { FormValue } = useSelector((state) => state.Todo);
  let navigate = useNavigate();
  let [ObjectID, SetObjectID] = useState(0);

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      SetObjectID(id);
      dispatch(EditTodo(id));
    }
  }, []);

  const SaveChange = () => {
    if (FormValidaion.IsEmpty(FormValue.Title)) {
      ToastMessage.ErrorToast("Todo Title Required !");
    } else if (FormValidaion.IsEmpty(FormValue.Description)) {
      ToastMessage.ErrorToast("Todo Description Required !");
    } else {
      if (!ObjectID) {
        dispatch(AddTodo(FormValue));
        dispatch(ResetTodoFormValue());
        navigate("/");
        ToastMessage.SuccessToast("Todo Create Successful");
      } else {
        dispatch(UpdateTodo({ id: ObjectID, FormValue }));
        dispatch(ResetTodoFormValue());
        navigate("/");
        ToastMessage.SuccessToast("Todo Update Successful");
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <h5>Create New Todo</h5>
                <hr className="bg-light" />
                <div className="col-12">
                  <label className="form-label">Todo Title</label>
                  <input
                    onChange={(e) => {
                      dispatch(
                        OnChangeTodoInput({
                          Name: "Title",
                          Value: e.target.value,
                        }),
                      );
                    }}
                    value={FormValue?.Title}
                    className="form-control form-control-sm"
                    type="text"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label className="form-label">Todo Description</label>
                  <textarea
                    onChange={(e) => {
                      dispatch(
                        OnChangeTodoInput({
                          Name: "Description",
                          Value: e.target.value,
                        }),
                      );
                    }}
                    value={FormValue?.Description}
                    className="form-control form-control-sm"
                    type="textarea"
                    rows="7"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-4 p-2">
                  <button
                    onClick={SaveChange}
                    className="btn btn-sm my-3 btn-primary"
                  >
                    Save Todo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCreateUpdate;
