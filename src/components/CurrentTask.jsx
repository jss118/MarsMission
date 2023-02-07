import React from "react";
import { useLocation } from "react-router-dom";

const CurrentTask = () => {
  const location = useLocation();
  const { title, des, assignedTo, createdBy } = location.state;

  return (
    <div className="currentTaskContainer__div">
      <h1 className="currentTask__h1">{title}</h1>

      <p className="currentTask__assignedTo-p">Assigned to: {assignedTo}</p>

      <p className="currentTask__createdBy-p">Created by: {createdBy}</p>
      <div className="currentTask__description-p">
        <p>
          Task description:
          <br />
          <br />
          {des}
        </p>
      </div>
    </div>
  );
};

export default CurrentTask;
