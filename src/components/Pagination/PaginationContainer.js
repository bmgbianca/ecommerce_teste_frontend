import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementPageNumber,
  decrementPageNumber,
  changePageNumber,
  selectPageNumber,
} from '../../features/pageNumberSlice';
import { selectTotalPages } from '../../features/totalPagesSlice';
import PaginationPresentational from './PaginationPresentational';

export default function PaginationContainer() {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectPageNumber);
  const totalPages = useSelector(selectTotalPages);

  const [paginationStart, setPaginationStart] = useState(1);
  const [paginationEnd, setPaginationEnd] = useState(totalPages - 1);

  const paginationLimit = 3;

  useEffect(() => {
    if (totalPages > paginationLimit + 1) {
      if (pageNumber < paginationLimit) {
        setPaginationStart(1);
        setPaginationEnd(paginationLimit);
      } else if (pageNumber > totalPages - paginationLimit + 1) {
        setPaginationStart(totalPages - paginationLimit);
        setPaginationEnd(totalPages - 1);
      } else if (pageNumber >= paginationLimit) {
        setPaginationStart(
          pageNumber - Math.floor((paginationLimit - 1) / 2) - 1
        );
        setPaginationEnd(pageNumber + Math.ceil((paginationLimit - 1) / 2));
      }
    } else {
      setPaginationStart(1);
      setPaginationEnd(totalPages - 1);
    }
  }, [totalPages, pageNumber]);

  const totalPagesArray = Array.from({ length: totalPages }, (a, b) => b + 1);

  const handlePageChange = (event) => {
    const e = event.target;
    if (e.textContent === 'chevron_left') {
      if (pageNumber <= 1) {
        return;
      } else {
        dispatch(decrementPageNumber());
      }
    } else if (e.textContent === 'chevron_right') {
      if (pageNumber >= totalPages) {
        return;
      } else {
        dispatch(incrementPageNumber());
      }
    } else {
      dispatch(changePageNumber(Number(e.id)));
    }
  };

  return (
    <PaginationPresentational
      totalPages={totalPages}
      pageNumber={pageNumber}
      totalPagesArray={totalPagesArray}
      paginationStart={paginationStart}
      paginationEnd={paginationEnd}
      paginationLimit={paginationLimit}
      handlePageChange={handlePageChange}
    />
  );
}
