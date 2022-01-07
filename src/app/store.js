import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from '../features/Details/detailsSlice';

export const store = configureStore({
  reducer: {
    details: detailsReducer,
  }
});
