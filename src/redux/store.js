import { configureStore } from '@reduxjs/toolkit';
import analyticsReducer from '../redux/slices/analyticsslice'; // Corrected path
import activityReducer from '../redux/slices/activityslice'
const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
    activity: activityReducer,
    // other slices
  },
});

export default store;