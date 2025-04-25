// redux/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        addUserSuccess: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        addUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        removeUserRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        removeUserSuccess: (state, action) => {
            state.loading = false;
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        removeUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    addUserRequest,
    addUserSuccess,
    addUserFailure,
    removeUserRequest,
    removeUserSuccess,
    removeUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
