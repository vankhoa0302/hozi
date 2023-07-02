/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '@modules/axiosService'


//fetch product type
const getProductType = (options) => {
    let url = `/api/paragraph/furniture_category`;
    return axiosService.get(url, options);
};
export const fetchgetProductType = createAsyncThunk(
    'product/fetchgetProductType',
    async (options) => {
        let res = await getProductType(options);
        return res;
    }
);
//fetch product by type
const getProductByType = (options) => {
    let url = `/api/products`;
    return axiosService.get(url, { params: options });
};
export const fetchgetProductByType = createAsyncThunk(
    'product/fetchgetProductType',
    async (options) => {
        let res = await getProductByType(options);
        return res;
    }
);
//fetch product detail
const getProductDetail = (options) => {
    let url = `/api/product/${options.id}`;
    return axiosService.get(url, options);
};
export const fetchgetProductDetail = createAsyncThunk(
    'product/fetchgetProductDetail',
    async (options) => {
        let res = await getProductDetail(options);
        return res;
    }
);
//search product
const seachProduct = (options) => {
    let url = `/api/products?label=${options.label}`;
    return axiosService.get(url, options);
};
export const fetchSearchProduct = createAsyncThunk(
    'product/fetchSearchProduct',
    async (options) => {
        let res = await seachProduct(options);
        return res;
    }
);
export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        userInfo: {
            userName: '',
            email: '',
        }
    },
    reducers: {
    },
    extraReducers: {
        // [fetchGetUserInfo.fulfilled]: (state, { payload }) => {
        //     let data = payload.results
        //     state.userInfo.userName = data[0].user_name;
        // },
    }
})
const { actions, reducer } = homeSlice;
export const { } = actions;
export default reducer; 