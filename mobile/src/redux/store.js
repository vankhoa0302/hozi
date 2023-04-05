/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';

import authSlice from '@screens/auth/authSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),

})
export default store;
