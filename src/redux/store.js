import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: contactsReducer,
    filters: filtersReducer,
  },
});
