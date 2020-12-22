import React, { useState } from 'react';
import './ButtonItemsPerPage.css';

export default function ButtonItemsPerPage({
  productsArray,
  handleProductsPerPage,
}) {
  const [chosenLimit, setChosenLimit] = useState(8);

  const handleLimitChange = (event) => {
    setChosenLimit(event.target.value);
    handleProductsPerPage(event.target.value);
  };

  return (
    <select
      disabled={productsArray ? false : true}
      className="browser-default z-depth-4 blue-grey lighten-3 blue-grey-text text-darken-1 selectButton"
      value={chosenLimit}
      style={{ border: 'none', width: 200 }}
      onChange={handleLimitChange}
    >
      <option className="teste" value={8}>
        8 produtos por página
      </option>
      <option className="teste" value={16}>
        16 produtos por página
      </option>
      <option className="teste" value={32}>
        32 produtos por página
      </option>
    </select>
  );
}
