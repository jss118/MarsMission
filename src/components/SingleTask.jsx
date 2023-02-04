import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/taskSlice";

const SingleTask = ({ id, title, des, assignedTo, createdBy }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask({ id }));
  };

  const handleUpdate = () => {
    dispatch(updateTask({ id }));
  };

  return (
    <li>
      <h2>{title}</h2>
      <p>assigned to: {assignedTo}</p>
      <p>created by: {createdBy}</p>
      <p>{des}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default SingleTask;
