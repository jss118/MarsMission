import React from "react";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const taskList = [
    {
      title: "Fuel",
      description: "find more rocket fuel!",
      createdBy: "Captain Redux",
      assignedTo: "Joe",
    },
    {
      title: "windscreen",
      description: "fix the windscreen!",
      createdBy: "Lutenant Flicker",
      assignedTo: "Joe",
    },
    {
      title: "Fuel",
      description: "we need MORE rocket fuel!",
      createdBy: "Captain Redux",
      assignedTo: "Joe",
    },
  ];
  return (
    <ul>
      {taskList.map(task => {
        return <SingleTask task={task} />;
      })}
    </ul>
  );
};

export default TaskList;
