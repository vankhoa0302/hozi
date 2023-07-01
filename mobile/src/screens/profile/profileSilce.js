/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '@modules/axiosService'


//fetch user info
const getUserInfo = (options) => {
    let url = `/user`;
    return axiosService.get(url, options);
};
export const fetchGetUserInfo = createAsyncThunk(
    'auth/fetchGetUserInfo',
    async (options) => {
        let res = await getUserInfo(options);
        return res;
    }
);
export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        userInfo: {
            userName: '',
            email: '',
        }
    },
    reducers: {
    },
    extraReducers: {
        [fetchGetUserInfo.fulfilled]: (state, { payload }) => {
            let data = payload.results
            state.userInfo.userName = data[0].user_name;
        },
    }
})
const { actions, reducer } = profileSlice;
export const { } = actions;
export default reducer;

