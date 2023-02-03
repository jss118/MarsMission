import React from "react";

const SingleTask = props => {
  const { title, description, createdBy, assignedTo } = props;
  console.log(props);
  return (
    <li>
      <h2>{title}</h2>
      <p>{assignedTo}</p>
      <p>{description}</p>
      <p>created by: {createdBy}</p>
      <button>Delete</button>
    </li>
  );
};

export default SingleTask;
