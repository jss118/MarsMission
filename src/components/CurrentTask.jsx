import React from "react";
import { useLocation } from "react-router-dom";

const CurrentTask = () => {
  const location = useLocation();
  const { title, des, assignedTo, createdBy } = location.state;

  return (
    <div>
      <h1>{title}</h1>
      <h2>Assigned to: {assignedTo}</h2>
      <p>Task description: {des}</p>
      <h2>Created by: {createdBy}</h2>
    </div>
  );
};

export default CurrentTask;
