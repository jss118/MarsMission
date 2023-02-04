import React from "react";

const SingleTask = props => {
  const { title, des, assignedTo, createdBy } = props;
  return (
    <li>
      <h2>{title}</h2>
      <p>assigned to: {assignedTo}</p>
      <p>{des}</p>
      <p>created by: {createdBy}</p>
      <button>Delete</button>
    </li>
  );
};

export default SingleTask;
