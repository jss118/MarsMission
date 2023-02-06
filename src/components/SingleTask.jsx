import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../redux/taskSlice";
import UpdateTaskForm from "./UpdateTaskForm";

const SingleTask = ({ id, title, des, assignedTo, createdBy }) => {
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask({ id }));
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
    <li className="listItem__li">
      <h2>{title}</h2>
      <p>assigned to: {assignedTo}</p>
      <p>created by: {createdBy}</p>
      <div>
        <p className="description__p">{des}</p>
      </div>
      <button
        onClick={() => {
          setUpdate(true);
        }}
      >
        Update
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default SingleTask;
