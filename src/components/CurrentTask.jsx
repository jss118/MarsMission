import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const CurrentTask = () => {
  const location = useLocation();
  const { id, title, des, assignedTo, createdBy } = location.state;
  const tasks = useSelector(state => state.tasks);
  const taskInfo = tasks.filter(task => task.id === id);
  const task = taskInfo[0];

  if (task === undefined) {
    return <p>select a task</p>;
  }
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
