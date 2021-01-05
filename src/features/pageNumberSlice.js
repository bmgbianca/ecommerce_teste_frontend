import { createSlice } from '@reduxjs/toolkit';

export const pageNumberSlice = createSlice({
  name: 'pageNumber',
  initialState: {
    value: 1,
  },
  reducers: {
    incrementPageNumber: (state) => {
      state.value += 1;
    },
    decrementPageNumber: (state) => {
      state.value -= 1;
    },
    changePageNumber: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  incrementPageNumber,
  decrementPageNumber,
  changePageNumber,
} = pageNumberSlice.actions;

export const selectPageNumber = (state) => state.pageNumber.value;

export default pageNumberSlice.reducer;
