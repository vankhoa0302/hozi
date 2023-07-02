/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '@modules/axiosService'

//add to cart
const addtocart = (options) => {
    let url = `api/cart`;
    return axiosService.patch(url, options);
};
export const fetchAddToCart = createAsyncThunk(
    'auth/fechAddToCart',
    async (options) => {
        let res = await addtocart(options);
        return res;
    }
);
//get list cart item
const getCartItem = (options) => {
    let url = `/api/cart?page=${options.page}`;
    return axiosService.get(url, options);
};
export const fetchgetCartItem = createAsyncThunk(
    'auth/fechAddToCart',
    async (options) => {
        let res = await getCartItem(options);
        return res;
    }
);

//delete cart
const deleteCart = (options) => {
    let url = `api/cart`;
    return axiosService.delete(url, options);
};
export const fetchDeleteCart = createAsyncThunk(
    'auth/fechAddToCart',
    async (options) => {
        let res = await deleteCart(options);
        return res;
    }
);
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // carts:[]
    },
    reducers: {
        
    },
    extraReducers: {
        // [fetchAddToCart.fulfilled]: (state, { payload }) => {
        //     let data = payload.results;
        //     console.log(data)
        //     state.cart = data;
        // },
    }
})
const { actions, reducer } = cartSlice;
export const {} = actions;
export default reducer; 