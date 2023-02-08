import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, selectTask } from "../redux/taskSlice";
import UpdateTaskForm from "./UpdateTaskForm";
import { Link } from "react-router-dom";

const SingleTask = ({ id, title, des, assignedTo, createdBy, selected }) => {
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask({ id }));
    dispatch(selectTask(id));
  };

  const taskSelect = () => {
    dispatch(selectTask(id));
  };

  if (update) {
    return (
      <UpdateTaskForm
        id={id}
        title={title}
        des={des}
        assignedTo={assignedTo}
        createdBy={createdBy}
        setUpdate={setUpdate}
      />
    );
  }
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/${id}`}
      key={id}
      state={{ id, title, des, assignedTo, createdBy, selected }}
    >
      <li
        onClick={taskSelect}
        className={`listItem__li ${selected ? "selectedTask" : null}`}
      >
        <h2 className="ellipsisOverflow-SingleTasks">{title}</h2>
        <p className="ellipsisOverflow-SingleTasks">
          assigned to: {assignedTo}
        </p>
        <p className="ellipsisOverflow-SingleTasks">created by: {createdBy}</p>
        <p className="ellipsisOverflow-SingleTasks">{des}</p>
        <button
          className="listItem__update-Button"
          onClick={() => {
            setUpdate(true);
          }}
        >
          Update
        </button>
        <button className="listItem__delete-Button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </Link>
  );
};

export default SingleTask;
