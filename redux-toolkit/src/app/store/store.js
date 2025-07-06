import {configureStore} from '@reduxjs/toolkit';
import todoResucer from '../features/todoSlice'
export const store=configureStore({
    reducer: todoResucer
})