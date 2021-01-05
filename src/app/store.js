import { configureStore } from '@reduxjs/toolkit';
import pageNumberReducer from '../features/pageNumberSlice';
import productsPerPageReducer from '../features/productsPerPageSlice';
import searchedStringReducer from '../features/searchedStringSlice';
import totalPagesReducer from '../features/totalPagesSlice';
import totalProductsReducer from '../features/totalProductsSlice';
import productsArrayReducer from '../features/productsArraySlice';

export default configureStore({
  reducer: {
    pageNumber: pageNumberReducer,
    productsPerPage: productsPerPageReducer,
    searchedString: searchedStringReducer,
    totalPages: totalPagesReducer,
    totalProducts: totalProductsReducer,
    productsArray: productsArrayReducer,
  },
});
