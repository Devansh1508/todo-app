import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
    isTile:false,
    active:0,
}

const navSlice = createSlice({
  name: 'navigate',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
        state.darkMode = action.payload;
        },
    setTile: (state, action) => {
        state.isTile = action.payload;
        },
    setActive: (state, action) => {
        state.active = action.payload;
    },
  },
});

export const { setDarkMode, setTile, setActive   } = navSlice.actions;
export default navSlice.reducer;
