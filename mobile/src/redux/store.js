/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';

import authSlice from '@screens/auth/authSlice'
import cartSlice from '@screens/cart/cartSlice';
import homeSlice from '@screens/home/homeSlice';
import profileSlice from '@screens/profile/profileSilce';

const store = configureStore({
    reducer: {
        auth: authSlice,
        profile: profileSlice,
        home: homeSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),

})
export default store;
