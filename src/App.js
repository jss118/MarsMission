import React from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import DeleteAllTasks from "./components/DeleteAllTasks";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <Header />
      <div className="appContainer__div">
        <div className="sidePanel__div">
          <AddTaskForm />
          <TaskList />
          <DeleteAllTasks />
        </div>
      </div>
    </div>
  );
}

export default App;
