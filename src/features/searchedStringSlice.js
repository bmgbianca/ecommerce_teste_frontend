import { createSlice } from '@reduxjs/toolkit';

export const searchedStringSlice = createSlice({
  name: 'searchedString',
  initialState: {
    value: null,
  },
  reducers: {
    changeSearchedString: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSearchedString } = searchedStringSlice.actions;

export const selectSearchedString = (state) => state.searchedString.value;

export default searchedStringSlice.reducer;
