import { configureStore } from '@reduxjs/toolkit';
import  viedoReducer from './features/video/videoSlice'

export const store = configureStore({
    reducer:{
        video:viedoReducer,
    },
});

