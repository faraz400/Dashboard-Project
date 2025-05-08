import { configureStore } from '@reduxjs/toolkit';
import analyticsReducer from '../redux/slices/analyticsslice'; // Corrected path
import activityReducer from '../redux/slices/activityslice'
import todoreducerslice from '../redux/slices/todosslice'

const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
    activity: activityReducer,
    user: todoreducerslice,
    // other slices
  },
});

export default store;