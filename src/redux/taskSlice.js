import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [
    {
      id: 1,
      title: "task1",
      description: "fill the engine with fuel",
      assignedTo: "Joe",
      createdBy: "Captain Phillips",
    },
    {
      id: 2,
      title: "task2",
      description: "fix the thrusters!",
      assignedTo: "anyone",
      createdBy: "Captain Redux",
    },
    {
      id: 3,
      title: "task3",
      description: "Replace the wind screen",
      assignedTo: "Bill",
      createdBy: "Diago",
    },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        assignedTo: action.payload.assignedTo,
        createdBy: action.payload.createdBy,
      };
      state.push(newTask);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
