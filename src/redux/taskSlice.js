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
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      const newState = state.map(task => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.createdBy = action.payload.createdBy;
          task.assignedTo = action.payload.assignedTo;
        }
        return task;
      });
      return newState;
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
