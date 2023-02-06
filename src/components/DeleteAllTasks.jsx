import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../redux/taskSlice";

const DeleteAllTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  return (
    <button
      className="deleteAll__button"
      onClick={() => {
        dispatch(deleteAll(tasks));
      }}
    >
      Delete All
    </button>
  );
};

export default DeleteAllTasks;
