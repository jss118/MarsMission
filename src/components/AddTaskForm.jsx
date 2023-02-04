import React, { useState } from "react";

const initialValues = {
  title: "",
  description: "",
  createdBy: "",
  assignedTo: "",
};

export default function AddTaskForm(props) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addTask = event => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <form className="flexForm">
        <input
          onChange={handleInputChange}
          placeholder="Title"
          type="text"
          value={values.title}
          name="title"
        />
        <input
          onChange={handleInputChange}
          placeholder="Description"
          type="text"
          value={values.description}
          name="description"
        />
        <input
          onChange={handleInputChange}
          placeholder="Your name"
          type="text"
          value={values.createdBy}
          name="createdBy"
        />
        <input
          onChange={handleInputChange}
          placeholder="Assigned to..."
          type="text"
          value={values.assignedTo}
          name="assignedTo"
        />
        <button
          type="submit"
          onClick={values => {
            addTask(values);
          }}
        >
          Add Task!
        </button>
      </form>
    </div>
  );
}
