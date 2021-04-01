import { configureStore } from '@reduxjs/toolkit';
// importing jobsSlice reducer
import jobsReducer from './jobs/jobsSlice';

// adding jobsSlice to store
export default configureStore({
    reducer: {
        jobs: jobsReducer,
    },
});
