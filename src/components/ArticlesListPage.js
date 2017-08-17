import React from 'react';
import {Link} from 'react-router';

const ArticlesListPage = (props) => (
  <div>
    <div className="articles-container">
      <Link to="action/create" className="btn btn-block btn-success create-new-article">Create new</Link>
      {props.renderArticles()}
    </div>
    {props.renderPagination()}
  </div>
); 

export default ArticlesListPage;