import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/taskSlice";

const UpdateTaskForm = props => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    id: props.id,
    title: props.title,
    description: props.des,
    assignedTo: props.assignedTo,
    createdBy: props.createdBy,
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateTask(values));
    props.setUpdate(false);
  };

  return (
    <div>
      <form className="flexForm__form">
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
        <div>
          <button
            className="listItem__update-Button"
            type="submit"
            onClick={values => {
              handleSubmit(values);
            }}
          >
            Update
          </button>
          <button
            className="listItem__delete-Button"
            onClick={() => props.setUpdate(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
