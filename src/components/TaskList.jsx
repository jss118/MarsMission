import React from "react";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const taskList = [
    {
      id: 1,
      title: "Fuel",
      description: "find more rocket fuel!",
      createdBy: "Captain Redux",
      assignedTo: "Joe",
    },
    {
      id: 2,
      title: "windscreen",
      description: "fix the windscreen!",
      createdBy: "Lutenant Flicker",
      assignedTo: "Joe",
    },
    {
      id: 3,
      title: "Fuel",
      description: "we need MORE rocket fuel!",
      createdBy: "Captain Redux",
      assignedTo: "Joe",
    },
  ];
  return (
    <div className="list__div">
      <ul>
        {taskList.map(task => {
          return (
            <SingleTask
              id={task.id}
              title={task.title}
              des={task.description}
              createdBy={task.createdBy}
              assignedTo={task.assignedTo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
