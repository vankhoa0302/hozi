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
    'auth/fetchGetCartItem',
    async (options) => {
        let res = await getCartItem(options);
        return res;
    }
);

//get cart in order detail
const getCartOrder = (options) => {
    let url = `/api/cart/${options.id}`;
    return axiosService.get(url, options);
};
export const fetchGetCartOrder = createAsyncThunk(
    'auth/fetchGetCartOrder',
    async (options) => {
        let res = await getCartOrder(options);
        return res;
    }
);

//delete cart
const deleteCart = (options) => {
    let url = `api/cart`;
    return axiosService.delete(url, options);
};
export const fetchDeleteCart = createAsyncThunk(
    'auth/fetchDeleteCart',
    async (options) => {
        let res = await deleteCart(options);
        return res;
    }
);
//delete cart item
const deleteCartItem = (options) => {
    let url = `api/cart?product_id=${options.product_id}`;
    return axiosService.delete(url, options);
};
export const fetchdDeleteCartItem = createAsyncThunk(
    'auth/fetchdDeleteCartItem',
    async (options) => {
        let res = await deleteCartItem(options);
        return res;
    }
);

//Check out
const checkout = (options) => {
    let url = `api/payment?pay_after_receive=${options.payment_id}`;
    return axiosService.post(url, options);
};
export const fetchCheckOut = createAsyncThunk(
    'auth/fetchCheckOut',
    async (options) => {
        let res = await checkout(options);
        return res;
    }
);
//get list order
const getListOrder = (options) => {
    let url = `api/payment`;
    return axiosService.get(url, { params: options });
};
export const fetchGetListOrder = createAsyncThunk(
    'auth/fetchGetListOrder',
    async (options) => {
        let res = await getListOrder(options);
        return res;
    }
);
//get order detail
const getOrderDetail = (options) => {
    let url = `api/payment/${options.id}`;
    return axiosService.get(url, options);
};
export const fetchGetOrderDetail = createAsyncThunk(
    'auth/fetchGetOrderDetail',
    async (options) => {
        let res = await getOrderDetail(options);
        return res;
    }
);

//get order detail
const cancelOrder = (options) => {
    let url = `api/payment/${options.id}`;
    return axiosService.patch(url, options);
};
export const fetchCancelOrder = createAsyncThunk(
    'auth/fetchCancelOrder',
    async (options) => {
        let res = await cancelOrder(options);
        return res;
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartId: '',
        numberCart: 0,
    },
    reducers: {
        setCart: (state, action) => {
            state.numberCart = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAddToCart.fulfilled, (state, { payload }) => {
            let count = payload.results.cart_count_item;
            state.numberCart = count;
        });
        builder.addCase(fetchDeleteCart.fulfilled, (state, { payload }) => {
            state.numberCart = 0
        });
        builder.addCase(fetchgetCartItem.fulfilled, (state, { payload }) => {
            let count = payload?.pager?.count;
            let data = payload?.results
            state.numberCart = count;
            state.cartId = data[0]?.cart_id;
        });
        builder.addCase(fetchCheckOut.fulfilled, (state, { payload }) => {
            state.numberCart = 0;
        });
        builder.addCase(fetchdDeleteCartItem.fulfilled, (state, { payload }) => {
            state.numberCart = payload?.quantity
        });
    },

})
const { actions, reducer } = cartSlice;
export const { setCart } = actions;
export default reducer; 