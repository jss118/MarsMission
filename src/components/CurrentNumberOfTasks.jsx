import React from "react";
import { useSelector } from "react-redux";

const CurrentNumberOfTasks = () => {
  const tasks = useSelector(state => state.tasks);
  return <h1 className="taskNumber__h1">{`Tasks: ${tasks.length}`}</h1>;
};

export default CurrentNumberOfTasks;
