import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const initialValues = {
  title: "",
  description: "",
  createdBy: "",
  assignedTo: "",
};

export default function AddTaskForm() {
  const [values, setValues] = useState(initialValues);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTask(values));
  };

  return (
    <div>
      <form
        className="flexForm__form addTaskForm__form"
        action="inputSubmission"
      >
        <input
          onChange={handleInputChange}
          placeholder="Title"
          type="text"
          value={values.title}
          name="title"
        />
        <input
          onChange={handleInputChange}
          placeholder="Assigned to..."
          type="text"
          value={values.assignedTo}
          name="assignedTo"
        />
        <input
          onChange={handleInputChange}
          placeholder="Created by..."
          type="text"
          value={values.createdBy}
          name="createdBy"
        />
        <input
          onChange={handleInputChange}
          placeholder="Description"
          type="text"
          value={values.description}
          name="description"
        />
        <button
          className="add__button"
          type="submit"
          onClick={values => {
            handleSubmit(values);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
