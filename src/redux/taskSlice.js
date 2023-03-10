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
      selected: false,
    },
    {
      id: 2,
      title: "task2",
      description: "fix the thrusters!",
      assignedTo: "anyone",
      createdBy: "Captain Redux",
      selected: false,
    },
    {
      id: 3,
      title: "task3",
      description: "Replace the wind screen",
      assignedTo: "Bill",
      createdBy: "Diago",
      selected: false,
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
        selected: false,
      };
      state.push(newTask);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      const updatedTask = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        assignedTo: action.payload.assignedTo,
        createdBy: action.payload.createdBy,
        selected: action.payload.selected,
      };
      state.forEach((task, index) => {
        if (task.id === updatedTask.id) {
          state.splice(index, 1, updatedTask);
        }
      });
      return state;
    },
    deleteAll: state => {
      state = [];
      return state;
    },
    selectTask: (state, action) => {
      state.forEach((task, index) => {
        if (task.id === action.payload) {
          state[index].selected = true;
        } else {
          state[index].selected = false;
        }
      });
      return state;
    },
  },
});

export const { addTask, removeTask, updateTask, deleteAll, selectTask } =
  taskSlice.actions;

export default taskSlice.reducer;
