import React from 'react';
import './PageTitle.css';

export default function PageTitle({ title }) {
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
