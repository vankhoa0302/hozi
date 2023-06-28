/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '@modules/axiosService'

//add to cart
const addtocart = (options) => {
    let url = `/cart`;
    return axiosService.patch(url, options);
};
export const fetchAddToCart = createAsyncThunk(
    'auth/fechAddToCart',
    async (options) => {
        let res = await addtocart(options);
        return res;
    }
);
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {

    },
    reducers: {
        isAuth: (state, action) => {
            state.token = action.payload;
        },
    },
    extraReducers: {

    }
})
const { actions, reducer } = cartSlice;
export const { isAuth } = actions;
export default reducer; 