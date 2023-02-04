import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../redux/taskSlice";

const SingleTask = ({ id, title, des, assignedTo, createdBy }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask({ id }));
  };

  return (
    <li>
      <h2>{title}</h2>
      <p>assigned to: {assignedTo}</p>
      <p>{des}</p>
      <p>created by: {createdBy}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default SingleTask;
