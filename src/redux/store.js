import { configureStore } from '@reduxjs/toolkit';
import { blogApiSlice } from './slices/blogSlice';
import subscribeSlice from './slices/subscribeSlice';

const store = configureStore({
    reducer: {
        subscribe: subscribeSlice,
        [blogApiSlice.reducerPath]: blogApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApiSlice.middleware)
});

export default store;