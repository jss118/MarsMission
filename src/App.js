import React from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="appContainer">
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
