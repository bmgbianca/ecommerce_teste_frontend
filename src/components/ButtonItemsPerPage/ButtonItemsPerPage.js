import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductsArray } from '../../features/productsArraySlice';
import {
  changeProductsPerPage,
  selectProductsPerPage,
} from '../../features/productsPerPageSlice';
import './ButtonItemsPerPage.css';

export default function ButtonItemsPerPage() {
  const dispatch = useDispatch();
  const productsPerPage = useSelector(selectProductsPerPage);
  const productsArray = useSelector(selectProductsArray);

  const [chosenLimit, setChosenLimit] = useState(productsPerPage);

  const handleLimitChange = (event) => {
    setChosenLimit(event.target.value);
    dispatch(changeProductsPerPage(event.target.value));
  };

  return (
    <select
      disabled={productsArray ? false : true}
      className="browser-default z-depth-4 blue-grey lighten-3 blue-grey-text text-darken-1 selectButton"
      value={chosenLimit}
      onChange={handleLimitChange}
    >
      <option value={5}>5 produtos por página</option>
      <option value={15}>15 produtos por página</option>
      <option value={30}>30 produtos por página</option>
    </select>
  );
}
