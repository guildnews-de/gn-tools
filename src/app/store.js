import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from '../features/themeToggle/themeToggle.Slice';

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});
