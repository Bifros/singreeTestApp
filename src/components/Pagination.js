import React from 'react';
import {Link} from 'react-router';

const Pagination = (props) => (
  <nav aria-label="Page navigation" className="pagination-wrapper">
    <ul className="pagination">
      <li>
        <Link to={{ pathname: '/page/' + props.getPrevPage()}} aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </Link>
      </li>
      {props.renderPaginationItems()}
      <li>
        <Link to={{ pathname: '/page/' + props.getNextPage()}} aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Pagination;
