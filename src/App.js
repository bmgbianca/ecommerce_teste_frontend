import React, { useState, useEffect } from 'react';
import Header from './components/Header/HeaderContainer';
import PageTitle from './components/PageTitle/PageTitle';
import ProductsList from './components/ProductsList/ProductsList';
import { getProducts } from './services/requestsService';
import './App.css';

export default function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [searchedString, setSearchedString] = useState(null);

  const getProductsArray = async (page) => {
    try {
      if (searchedString === null) {
        const fullProductsArray = await getProducts(productsPerPage, page);
        setProductsArray(fullProductsArray.data.currentProductsList);
        setTotalPages(fullProductsArray.data.totalPages);
      } else {
        const filteredProductsArray = await getProducts(
          productsPerPage,
          page,
          searchedString
        );
        if (filteredProductsArray.data.totalProducts === 0) {
          setProductsArray(null);
        } else {
          setProductsArray(filteredProductsArray.data.currentProductsList);
          setTotalPages(filteredProductsArray.data.totalPages);
        }
        setTotalProducts(filteredProductsArray.data.totalProducts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageNumber = (page) => {
    setPageNumber(page);
    getProductsArray(page);
  };

  const handleProductsPerPage = (limit) => {
    setProductsPerPage(limit);
  };

  const handleSearchedString = (searchInput) => {
    setSearchedString(searchInput);
  };

  useEffect(() => {
    handlePageNumber(1);
    if (searchedString) {
      document.title = `Mmartan | Busca: ${searchedString}`;
    } else {
      document.title = 'Mmartan | Lista de Produtos';
    }
  }, [searchedString, productsPerPage]);

  return (
    <>
      <Header handleSearchedString={handleSearchedString} />
      <PageTitle title={searchedString} />
      <ProductsList
        productsArray={productsArray}
        totalPages={totalPages}
        totalProducts={totalProducts}
        pageNumber={pageNumber}
        handlePageNumber={handlePageNumber}
        handleProductsPerPage={handleProductsPerPage}
        searchedString={searchedString}
      />
    </>
  );
}
