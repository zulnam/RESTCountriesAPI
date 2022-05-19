import { createSlice } from '@reduxjs/toolkit';
import toggleDarkModeAction from './userActions';

const initialState = {
  darkMode: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleDarkMode: toggleDarkModeAction,
  },
});

export const { toggleDarkMode } = user.actions;

export default user.reducer;
