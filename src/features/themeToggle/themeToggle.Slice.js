import { createSlice } from '@reduxjs/toolkit';

const themeModes = {
  lightHeader: {
    color: 'light', navbar: 'navbar-light', text: 'dark', button: 'secondary',
  },
  darkHeader: {
    color: 'dark', navbar: 'navbar-dark', text: 'light', button: 'midnight',
  },
  lightBody: {
    color: 'light-sec', text: 'dark', button: 'secondary',
  },
  darkBody: {
    color: 'dark-sec', text: 'light', button: 'midnight',
  },
};

const initialState = {
  mode: 'mixed',
  header: themeModes.darkHeader,
  body: themeModes.lightBody,
};

export const themeToggleSlice = createSlice({
  name: 'theme',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLight: (state) => {
      state.mode = 'light';
      state.header = themeModes.lightHeader;
      state.body = themeModes.lightBody;
    },
    setDark: (state) => {
      state.mode = 'dark';
      state.header = themeModes.darkHeader;
      state.body = themeModes.darkBody;
    },
    setMixed: (state) => {
      state.mode = 'mixed';
      state.header = themeModes.darkHeader;
      state.body = themeModes.lightBody;
    },
  },
});

export const { setLight, setDark, setMixed } = themeToggleSlice.actions;

export const selectThemeMode = (state) => state.theme.mode;
export const selectHeaderMode = (state) => state.theme.header;
export const selectBodyMode = (state) => state.theme.body;

export default themeToggleSlice.reducer;
