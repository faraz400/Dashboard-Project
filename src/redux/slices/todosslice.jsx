import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [], // Array to store todos
  inputuser: "", // Input field value
  editIndex: null, // Index of the todo being edited
};

const userslice = createSlice({
  name: "user", // Slice name
  initialState, // Correct initial state
  reducers: {
    // Set the input value
    setInputuser(state, action) {
      state.inputuser = action.payload;
    },

    // Delete a todo by ID
    deleteuser(state, action) {
      state.user = state.user.filter((user) => user.id !== action.payload);
    },

    // Edit a todo
    editTuser(state, action) {
      state.inputuser = state.user[action.payload].text;
      state.editIndex = action.payload;
    },

    // Add or update a todo
    adduser(state) {
      if (state.inputuser.trim() !== "") {
        if (state.editIndex !== null) {
          // Update existing todo
          state.user[state.editIndex].text = state.inputuser;
          state.editIndex = null;
        } else {
          // Add new todo
          state.user.push({ id: Date.now(), text: state.inputuser });
        }
        state.inputuser = ""; // Clear input field
      }
    },
  },
});

export const { setInputuser, deleteuser, adduser, editTuser } = userslice.actions;
export default userslice.reducer;