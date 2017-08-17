import React from 'react';
import {Link} from 'react-router';

class PaginationItem extends React.Component {
  render() {
    const activeClass = this.props.active == true ?
      'active' : '';
    return (
      <li className={activeClass}>
        <Link to={{pathname: '/page/' + this.props.pageNum}}>
          {this.props.pageNum}
        </Link>
      </li>
    );
  }
  
};

export default PaginationItem; 