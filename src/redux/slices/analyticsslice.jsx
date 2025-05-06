// redux/slices/analyticsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chartData: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 278 },
    { name: "May", value: 189 },
  ],
};

const analyticsSlice = createSlice({
  name: "analytic",
  initialState,
  reducers: {
    setChartData: (state, action) => {
      state.chartData = action.payload;
    },
  },
});

export const { setChartData } = analyticsSlice.actions;
export default analyticsSlice.reducer;
