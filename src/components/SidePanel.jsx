import React from "react";
import CurrentNumberOfTasks from "./CurrentNumberOfTasks";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import DeleteAllTasks from "./DeleteAllTasks";

const SidePanel = () => {
  return (
    <div className="sidePanel__div">
      <CurrentNumberOfTasks />
      <AddTaskForm />
      <TaskList />
      <DeleteAllTasks />
    </div>
  );
};

export default SidePanel;
