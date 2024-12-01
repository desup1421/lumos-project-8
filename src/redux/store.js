import { configureStore } from '@reduxjs/toolkit';
import { blogApiSlice } from './slices/blogSlice';
import subscribeSlice from './slices/subscribeSlice';
import dataSlice from './slices/dataSlice';

const store = configureStore({
    reducer: {
        data: dataSlice,
        subscribe: subscribeSlice,
        [blogApiSlice.reducerPath]: blogApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApiSlice.middleware)
});

export default store;