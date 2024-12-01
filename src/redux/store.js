import { configureStore } from '@reduxjs/toolkit';
import { blogApiSlice } from './slices/blogSlice';
import subscribeSlice from './slices/subscribeSlice';
import themeSlice from './slices/themeSlice';

const store = configureStore({
    reducer: {
        theme: themeSlice,
        subscribe: subscribeSlice,
        [blogApiSlice.reducerPath]: blogApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApiSlice.middleware)
});

export default store;