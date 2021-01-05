import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductsArray } from '../../features/productsArraySlice';
import { selectSearchedString } from '../../features/searchedStringSlice';
import { selectTotalProducts } from '../../features/totalProductsSlice';
import ItemBox from '../ItemBox/ItemBoxContainer';
import ButtonItemsPerPage from '../ButtonItemsPerPage/ButtonItemsPerPage';
import Pagination from '../Pagination/PaginationContainer';
import './ProductsList.css';

export default function ProductsList() {
  const productsArray = useSelector(selectProductsArray);
  const searchedString = useSelector(selectSearchedString);
  const totalProducts = useSelector(selectTotalProducts);

  return (
    <>
      <main className="mainContent">
        {searchedString && (
          <p className="productsFound">
            {totalProducts} Produto(s) Encontrado(s)
          </p>
        )}
        {productsArray && productsArray.length !== 0 ? (
          productsArray.map((product, i) => {
            return (
              <ItemBox
                key={1 + product.name + i}
                product={product}
                divId={'div' + i.toString()}
              />
            );
          })
        ) : productsArray && productsArray.length === 0 ? (
          <div className="preLoader">
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="gap-patch">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <p className="charging">Carregando...</p>
          </div>
        ) : (
          <p className="notFound">Desculpe! Não encontramos o seu produto :(</p>
        )}
      </main>
      <footer className="pageFooter">
        <ButtonItemsPerPage />
        <Pagination />
      </footer>{' '}
    </>
  );
}
