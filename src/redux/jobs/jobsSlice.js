import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jobs.github.com/positions.json';
const proxy = 'https://pacific-taiga-98536.herokuapp.com/';

// redux thunk fucction that fetches jobs when our app mounts.
export const fetchJobList = createAsyncThunk('jobs/fetchJobs', async (params) => {
    const response = await axios
        .get(proxy + url, {
            params: { ...params, page: 0 },
        })
        .then((res) => res.data)
        .catch((error) => error);
    return response;
});

// redux thunk fucction that fetches jobs when we click Load More Button on the bottom of HomePage.
export const fetchMoreJobs = createAsyncThunk('jobs/fetchMoreJobs', async (params) => {
    const response = await axios
        .get(proxy + url, {
            params: { ...params },
        })
        .then((res) => res.data)
        .catch((error) => error);
    return response;
});

// Initial state
const jobsInitialState = {
    jobsList: {
        status: 'idle',
        data: [],
        error: {},
    },
    moreJobs: {
        status: 'idle',
        error: {},
    },
    searchParams: {
        description: '',
        location: '',
        full_time: 'off',
        markdown: 'true',
    },
    isNextPage: true,
};

// Creating jobsSlice, which will handle jobs piece(slice) of our global state(store)
export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: jobsInitialState,
    reducers: {
        setParams: (state, action) => {
            state.searchParams = action.payload;
        },
    },
    extraReducers: {
        // pending action for fetcJobList thunk
        [fetchJobList.pending]: (state) => {
            state.jobsList = {
                status: 'loading',
                data: [],
                error: {},
            };
        },
        // fulfilled action for fetcJobList thunk
        [fetchJobList.fulfilled]: (state, action) => {
            state.jobsList.data = [];
            state.jobsList = {
                status: 'success',
                data: action.payload,
                error: {},
            };

            if (state.jobsList.data.length < 50) {
                state.isNextPage = false;
            } else {
                state.isNextPage = true;
            }
            state.searchParams.page = 2;
        },
        // error action for fetchJobList thunk
        [fetchJobList.rejected]: (state, action) => {
            state.jobsList = {
                status: 'error',
                data: [],
                error: action.payload,
            };
        },

        // Pending action for fectMoreJobs thunk
        [fetchMoreJobs.pending]: (state) => {
            state.moreJobs = {
                status: 'loading',
                data: [],
                error: {},
            };
        },
        // fulfilled action for fetchMoreJobs thunk
        [fetchMoreJobs.fulfilled]: (state, action) => {
            state.jobsList = {
                status: state.jobsList.status, // status stays the same
                data: state.jobsList.data.concat(action.payload), // combining existing jobs with new ones
                error: {},
            };
            state.searchParams.page += 1; // setting page value to +1, so next fetch action fetches next page

            // Api returns 50jobs , so if it returns less it means there is no next page and we want to set IsNextPage variable to false
            if (action.payload.length < 50) {
                state.isNextPage = false;
            } else {
                state.isNextPage = true;
            }

            // Setting Load More Jobs Status to 'success'
            state.moreJobs.status = 'success';
        },
        // error action for fetchMoreJobs thunk
        [fetchMoreJobs.rejected]: (state, action) => {
            state.moreJobs = {
                status: 'error',
                data: [],
                error: action.payload,
            };
        },
    },
});

// exporting action
export const { setParams } = jobsSlice.actions;

// exporting reducer
export default jobsSlice.reducer;
