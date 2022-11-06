import { configureStore } from '@reduxjs/toolkit';
import  viedoReducer from './features/video/videoSlice'
import modalReducer from './features/sidebar/sidebarSlice'

export const store = configureStore({
    reducer:{
        home:viedoReducer,
        sidebar:modalReducer,
    },
});

