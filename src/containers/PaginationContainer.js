import React from 'react';

import Pagination from '../components/Pagination';
import PaginationItem from '../components/PaginationItem';

class PaginationContainer extends React.Component {

  constructor(props) {
    super(props);
    
    this.articlesPerPage = 3;
    // Set amount of fetched articles (updates in componentWillUpdate)
    this.articlesAmount = this.props.articles ?
      Number(this.props.articles.length) : 0;
    this.currentPage = this.props.currentPage ?
      Number(this.props.currentPage) : 1;
  }

  render() {
    return (
      <Pagination 
        renderPaginationItems={this.renderPaginationItems.bind(this)}
        getPrevPage={this.getPrevPage.bind(this)}
        getNextPage={this.getNextPage.bind(this)}
      />
    );
  }

  componentWillUpdate(nextProps) {
    this.articlesAmount = nextProps.articles ?
      Number(nextProps.articles.length) : 0;
    this.currentPage = nextProps.currentPage ?
      Number(nextProps.currentPage) : 1;
  }

  /* METHODS */
  renderPaginationItems() {
    const pagesAmount = Math.ceil(this.articlesAmount / this.articlesPerPage);          
    let pagesList = [];

    for (let index = 0; index < pagesAmount; index++)
      pagesList.push(
        <PaginationItem 
          active={this.currentPage == (index + 1)} 
          pageNum={index + 1} 
          key={index} 
        />
      );
    
    return pagesList;
  }

  getPrevPage() {
    const isFirstPage = () => this.currentPage == 1;

    return isFirstPage() ? this.currentPage : this.currentPage - 1;
  }

  getNextPage() {
    const isLastPage = () =>
      this.currentPage >= Math.ceil(this.articlesAmount / this.articlesPerPage);

    return isLastPage() ? this.currentPage : this.currentPage + 1;
  }

}

export default PaginationContainer;
