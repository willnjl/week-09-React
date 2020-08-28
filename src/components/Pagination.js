import React from "react";
const Pagination = ({ pages }) => (
  <>
    <ul className="pagination">
      {pages.map((page, index) => (
        <li className="page-item" key={index}>
          <a href="#" className="page-link">
            {page}
          </a>
        </li>
      ))}
    </ul>
  </>
);
export default Pagination;
