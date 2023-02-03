import React from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="appContainer">
      <AddTaskForm />
      <TaskList />
      <Tasks />
    </div>
  );
}

export default App;
