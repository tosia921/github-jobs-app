import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = '/positions.json';

export const fetchJobList = createAsyncThunk('jobs/fetchJobs', async (params) => {
    const response = await axios
        .get(url, {
            params: { ...params },
        })
        .then((res) => res.data)
        .catch((error) => error);
    return response;
});

const jobsInitialState = {
    jobsList: {
        status: 'idle',
        data: [],
        error: {},
    },
};

// Creating jobsSlice, which will handle jobs piece(slice) of our global state(store)
export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: jobsInitialState,
    reducers: {},
    extraReducers: {
        [fetchJobList.pending]: (state) => {
            state.jobsList = {
                status: 'loading',
                data: [],
                error: {},
            };
        },
        [fetchJobList.fulfilled]: (state, action) => {
            state.jobsList = {
                status: 'success',
                data: action.payload,
                error: {},
            };
        },
        [fetchJobList.rejected]: (state, action) => {
            state.jobsList = {
                status: 'error',
                data: [],
                error: action.payload,
            };
        },
    },
});

export default jobsSlice.reducer;
