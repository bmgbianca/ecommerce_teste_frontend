import React from 'react';
import './Pagination.css';

export default function Pagination({
  productsArray,
  totalPages,
  pageNumber,
  totalPagesArray,
  handlePageChange,
}) {
  return (
    <>
      {productsArray && (
        <ul className="pagination pageNumeration">
          <li
            onClick={handlePageChange}
            className={pageNumber <= 1 ? 'disabled' : 'waves-effect'}
          >
            <a href="#!">
              <i id={pageNumber - 1} className="material-icons">
                chevron_left
              </i>
            </a>
          </li>
          {totalPagesArray.map((page, i) => {
            return (
              <li
                onClick={handlePageChange}
                key={1 + page + i}
                className={
                  pageNumber === page
                    ? 'active amber accent-4 pageNumber'
                    : 'waves-effect pageNumber'
                }
              >
                <a id={page} href="#!">
                  {page}
                </a>
              </li>
            );
          })}

          <li
            onClick={handlePageChange}
            className={pageNumber >= totalPages ? 'disabled' : 'waves-effect'}
          >
            <a href="#!">
              <i id={pageNumber + 1} className="material-icons">
                chevron_right
              </i>
            </a>
          </li>
        </ul>
      )}
    </>
  );
}
