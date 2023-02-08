import React from "react";
import SidePanel from "./SidePanel";
import TaskContainer from "./TaskContainer";

const AppBody = () => {
  return (
    <div className="appContainer__div">
      <SidePanel />
      <TaskContainer />
    </div>
  );
};

export default AppBody;
