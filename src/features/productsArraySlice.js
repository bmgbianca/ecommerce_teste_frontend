import { createSlice } from '@reduxjs/toolkit';

export const productsArraySlice = createSlice({
  name: 'productsArray',
  initialState: {
    value: [],
  },
  reducers: {
    changeProductsArray: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeProductsArray } = productsArraySlice.actions;

export const selectProductsArray = (state) => state.productsArray.value;

export default productsArraySlice.reducer;
