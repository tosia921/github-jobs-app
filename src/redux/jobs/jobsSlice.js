import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jobs.github.com/positions.json';
const proxy = 'https://pacific-taiga-98536.herokuapp.com/';

export const fetchJobList = createAsyncThunk('jobs/fetchJobs', async (params) => {
    const response = await axios
        .get(proxy + url, {
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
    visibleJobs: 12,
};

// Creating jobsSlice, which will handle jobs piece(slice) of our global state(store)
export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: jobsInitialState,
    reducers: {
        addNextJobs: (state) => {
            state.visibleJobs += 12;
        },
        setDefaultJobs: (state) => {
            state.visibleJobs = 12;
        },
    },
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

export const { addNextJobs, setDefaultJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
