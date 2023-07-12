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
    let url = `/api/products`;
    return axiosService.get(url, { params: options });
};
export const fetchSearchProduct = createAsyncThunk(
    'product/fetchSearchProduct',
    async (options) => {
        let res = await seachProduct(options);
        return res;
    }
);
//add to wish list
const addToWish = (options) => {
    let url = `api/favorite`;
    return axiosService.post(url, options);
};
export const fetchAddToWish = createAsyncThunk(
    'product/fetchAddToWish',
    async (options) => {
        let res = await addToWish(options);
        return res;
    }
);

//add to wish list
const getWishList = (options) => {
    let url = `api/favorite`;
    return axiosService.get(url, { parrams: options });
};
export const fetchGetWishList = createAsyncThunk(
    'product/fetchGetWishList',
    async (options) => {
        let res = await getWishList(options);
        return res;
    }
);

//get slide
const getSlide = (options) => {
    let url = `api/slider`;
    return axiosService.get(url, options);
};
export const fetchGetSlide = createAsyncThunk(
    'product/fetchGetSlide',
    async (options) => {
        let res = await getSlide(options);
        return res;
    }
);
export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        userInfo: {
            userName: '',
            email: '',
        },
        loading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {

    },
})
const { actions, reducer } = homeSlice;
export const { setLoading } = actions;
export default reducer; 