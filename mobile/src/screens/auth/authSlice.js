/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '@modules/axiosService'
import AsyncStorage from '@react-native-async-storage/async-storage';
//fetch login
const Login = (options) => {
    let url = `/api/oauth/token`;
    return axiosService.post(url, options, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
};
export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (options) => {
        let res = await Login(options);
        return res;
    }
);
//fetch logout user
const logoutUser = (options) => {
    let url = `/api/user/logout`;
    return axiosService.get(url, options);
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
    let url = `api/user/register`;
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
        errorLogin: false,
        isLogin: false,
        isAuthLoading: false,
    },
    reducers: {
        isAuth: (state, action) => {
            state.isLogin = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
            let token = payload.token_type + " " + payload.access_token;
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('refresh_token', payload.refresh_token);
        });
        builder.addCase(fetchLogout.fulfilled, (state, { payload }) => {
            AsyncStorage.clear();
            state.isLogin = false;
        });
    }
})
const { actions, reducer } = authSlice;
export const { isAuth } = actions;
export default reducer; 