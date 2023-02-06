import React from "react";
import SingleTask from "./SingleTask";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className="list__div">
      <ul>
        {tasks.map(task => {
          return (
            <SingleTask
              key={task.id}
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
