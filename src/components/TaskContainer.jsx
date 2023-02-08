import React from "react";
import PlanetImg from "./PlanetImg";
import CurrentTask from "./CurrentTask";
import { Routes, Route } from "react-router-dom";

const TaskContainer = () => {
  return (
    <div className="taskContainer__div">
      <PlanetImg />
      <Routes>
        <Route path="/:id" element={<CurrentTask />} />
      </Routes>
    </div>
  );
};

export default TaskContainer;
