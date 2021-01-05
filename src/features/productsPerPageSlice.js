import { createSlice } from '@reduxjs/toolkit';

export const productsPerPageSlice = createSlice({
  name: 'productsPerPage',
  initialState: {
    value: 5,
  },
  reducers: {
    changeProductsPerPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeProductsPerPage } = productsPerPageSlice.actions;

export const selectProductsPerPage = (state) => state.productsPerPage.value;

export default productsPerPageSlice.reducer;
