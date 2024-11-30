import { configureStore } from '@reduxjs/toolkit';
import { blogApiSlice } from './slices/blogSlice';

const store = configureStore({
    reducer: {
        [blogApiSlice.reducerPath]: blogApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApiSlice.middleware)
});

export default store;