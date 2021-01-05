import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductsArray } from './features/productsArraySlice';
import { selectProductsPerPage } from './features/productsPerPageSlice';
import { changePageNumber, selectPageNumber } from './features/pageNumberSlice';
import { selectSearchedString } from './features/searchedStringSlice';
import { changeTotalPages } from './features/totalPagesSlice';
import { changeTotalProducts } from './features/totalProductsSlice';
import Header from './components/Header/HeaderContainer';
import PageTitle from './components/PageTitle/PageTitle';
import ProductsList from './components/ProductsList/ProductsList';
import { getProducts } from './services/requestsService';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const productsPerPage = useSelector(selectProductsPerPage);
  const pageNumber = useSelector(selectPageNumber);
  const searchedString = useSelector(selectSearchedString);

  const getProductsArray = async () => {
    try {
      if (searchedString === null) {
        const fullProductsArray = await getProducts(
          productsPerPage,
          pageNumber
        );
        dispatch(
          changeProductsArray(fullProductsArray.data.currentProductsList)
        );
        dispatch(changeTotalProducts(fullProductsArray.data.totalProducts));
        dispatch(changeTotalPages(fullProductsArray.data.totalPages));
      } else {
        const filteredProductsArray = await getProducts(
          productsPerPage,
          pageNumber,
          searchedString
        );
        if (filteredProductsArray.data.totalProducts === 0) {
          dispatch(changeProductsArray(null));
        } else {
          dispatch(
            changeProductsArray(filteredProductsArray.data.currentProductsList)
          );
          dispatch(changeTotalPages(filteredProductsArray.data.totalPages));
        }
        dispatch(changeTotalProducts(filteredProductsArray.data.totalProducts));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductsArray();
  }, [pageNumber]);

  useEffect(() => {
    if (searchedString) {
      document.title = `Mmartan | Busca: ${searchedString}`;
    } else {
      document.title = 'Mmartan | Lista de Produtos';
    }
    dispatch(changePageNumber(1));
    getProductsArray();
  }, [searchedString, productsPerPage]);

  return (
    <>
      <Header />
      <PageTitle />
      <ProductsList />
    </>
  );
}
