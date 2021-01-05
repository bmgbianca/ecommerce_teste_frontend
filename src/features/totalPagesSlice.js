import { createSlice } from '@reduxjs/toolkit';

export const totalPagesSlice = createSlice({
  name: 'totalPages',
  initialState: {
    value: 0,
  },
  reducers: {
    changeTotalPages: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTotalPages } = totalPagesSlice.actions;

export const selectTotalPages = (state) => state.totalPages.value;

export default totalPagesSlice.reducer;
