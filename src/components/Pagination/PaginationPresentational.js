import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductsArray } from '../../features/productsArraySlice';
import './Pagination.css';

export default function PaginationPresentational({
  totalPages,
  pageNumber,
  totalPagesArray,
  paginationStart,
  paginationEnd,
  paginationLimit,
  handlePageChange,
}) {
  const productsArray = useSelector(selectProductsArray);

  return (
    <>
      {productsArray && (
        <ul className="pagination pageNumeration">
          <li
            onClick={handlePageChange}
            className={pageNumber <= 1 ? 'disabled' : 'waves-effect'}
          >
            <a href="#!">
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          <li
            onClick={handlePageChange}
            className={
              pageNumber === 1
                ? 'active amber accent-4 pageNumber'
                : 'waves-effect pageNumber'
            }
          >
            <a id="1" href="#!">
              1
            </a>
          </li>
          {totalPages > paginationLimit && pageNumber >= paginationLimit ? (
            <li className="waves-effect pageNumber">
              <a className="morePages" href="#!">
                ...
              </a>
            </li>
          ) : (
              <></>
            )}
          <>
            {totalPagesArray
              .slice(paginationStart, paginationEnd)
              .map((page) => {
                return (
                  <li
                    onClick={handlePageChange}
                    key={page + 1}
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
          </>

          {totalPages > paginationLimit + 1 &&
            pageNumber <= totalPages - paginationLimit + 1 ? (
              <li className="waves-effect pageNumber">
                <a className="morePages" href="#!">
                  ...
              </a>
              </li>
            ) : (
              <></>
            )}
          {totalPages > 1 && (
            <li
              onClick={handlePageChange}
              className={
                pageNumber === totalPages
                  ? 'active amber accent-4 pageNumber'
                  : 'waves-effect pageNumber'
              }
            >
              <a id={totalPages.toString()} href="#!">
                {totalPages}
              </a>
            </li>
          )}
          <li
            onClick={handlePageChange}
            className={pageNumber >= totalPages ? 'disabled' : 'waves-effect'}
          >
            <a href="#!">
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      )}
    </>
  );
}
