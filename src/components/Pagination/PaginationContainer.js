import React from 'react';
import PaginationPresentational from './PaginationPresentational';
import './Pagination.css';

export default function Pagination({
  totalPages,
  productsArray,
  pageNumber,
  handlePageNumber,
}) {
  const totalPagesArray = Array.from({ length: totalPages }, (a, b) => b + 1);
  const handlePageChange = (event) => {
    const e = event.target;
    if (e.textContent === 'chevron_left') {
      if (pageNumber <= 1) {
        return;
      } else {
        handlePageNumber(Number(e.id));
      }
    } else if (e.textContent === 'chevron_right') {
      if (pageNumber >= totalPages) {
        return;
      } else {
        handlePageNumber(Number(e.id));
      }
    } else {
      handlePageNumber(Number(e.id));
    }
  };

  return (
    <PaginationPresentational
      productsArray={productsArray}
      totalPages={totalPages}
      pageNumber={pageNumber}
      totalPagesArray={totalPagesArray}
      handlePageChange={handlePageChange}
    />
  );
}
