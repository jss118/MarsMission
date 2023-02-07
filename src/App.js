import React from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import CurrentTask from "./components/CurrentTask";
import DeleteAllTasks from "./components/DeleteAllTasks";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentNumberOfTasks from "./components/CurrentNumberOfTasks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="appContainer__div">
          <div className="sidePanel__div">
            <CurrentNumberOfTasks />
            <AddTaskForm />
            <TaskList />
            <DeleteAllTasks />
          </div>
          <Routes>
            <Route path="/:id" element={<CurrentTask />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
