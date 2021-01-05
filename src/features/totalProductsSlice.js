import { createSlice } from '@reduxjs/toolkit';

export const totalProductsSlice = createSlice({
  name: 'totalProducts',
  initialState: {
    value: 0,
  },
  reducers: {
    changeTotalProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTotalProducts } = totalProductsSlice.actions;

export const selectTotalProducts = (state) => state.totalProducts.value;

export default totalProductsSlice.reducer;
