import { createSlice } from "@reduxjs/toolkit";

const initialState = {}; // Corrected spelling and set initial state

const searchSlice = createSlice({
    name: "search",
    initialState, // Fixed typo: 'intialState' to 'initialState'
    reducers: {
        cacheResults: (state, action) => {
            // Use Object.assign to update the state
            Object.assign(state, action.payload);
        },
    },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer
