import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [
    { id: 1, action: "Logged in", timestamp: "2023-05-01 10:00 AM" },
    { id: 2, action: "Viewed Dashboard", timestamp: "2023-05-01 10:05 AM" },
    { id: 3, action: "Updated Profile", timestamp: "2023-05-01 10:10 AM" },
  ],
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    addActivity: (state, action) => {
      state.activities.unshift({
        id: Date.now(),
        action: action.payload,
        timestamp: new Date().toLocaleString(),
      });
    },
  },
});

export const { addActivity } = activitySlice.actions;
export default activitySlice.reducer;
