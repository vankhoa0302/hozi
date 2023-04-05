/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '@modules/axiosService'
//fetch login
const Login = (options) => {
    let url = `/login`;
    return axiosService.post(url, options);
};
export const fetchLogin = createAsyncThunk(
    "auth/fetchLogin",
    async (options) => {
        let res = await Login(options);
        return res;
    }
);
//fetch logout user
const logoutUser = (options) => {
    let url = `/user/logout`;
    return axiosService.post(url, options);
};
export const fetchLogout = createAsyncThunk(
    'auth/fetchLogout',
    async (options) => {
        let res = await logoutUser(options);
        return res;
    }
);
//fetch register
const register = (options) => {
    let url = `/user-register`;
    return axiosService.post(url, options);
};
export const fetchRegister = createAsyncThunk(
    'auth/fetchLogout',
    async (options) => {
        let res = await register(options);
        return res;
    }
);
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
    },
    reducers: {
        isAuth: (state, action) => {
            state.token = action.payload;

        },
    }
})
const { actions, reducer } = authSlice;
export const { isAuth } = actions;
export default reducer; 