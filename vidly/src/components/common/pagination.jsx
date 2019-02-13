import React, { Component } from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  console.log(pagesCount);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link">Previous</a>
          </li>
          {pages.map(page => (
            <li key={page} className="page-item">
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
