import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchedString } from '../../features/searchedStringSlice';
import './PageTitle.css';

export default function PageTitle() {
  const title = useSelector(selectSearchedString);

  return (
    <>
      {title ? (
        <h1 className="pageTitle blue-grey lighten-5 grey-text text-darken-2">
          {title}
        </h1>
      ) : (
        <h1 className="pageTitle blue-grey lighten-5 grey-text text-darken-2">
          Lista de Produtos
        </h1>
      )}
    </>
  );
}
