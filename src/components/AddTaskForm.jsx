import React, { useState } from "react";

export default function AddTaskForm(props) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const onSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flexForm">
        <input
          onChange={event => setTask(event.target.value)}
          placeholder="Title"
          type="text"
          value={task}
        />
        <input
          onChange={event => setDescription(event.target.value)}
          placeholder="Description"
          type="text"
          value={description}
        />
        <input
          onChange={event => setCreatedBy(event.target.value)}
          placeholder="Your name"
          type="text"
          value={createdBy}
        />
        <input
          onChange={event => setAssignedTo(event.target.value)}
          placeholder="Assigned to..."
          type="text"
          value={assignedTo}
        />
        <button>Add Task!</button>
      </form>
    </div>
  );
}
