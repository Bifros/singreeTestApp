import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Loading from '../components/Loading';
import ArticlesListPage from '../components/ArticlesListPage';
import ArticlePreview from '../components/ArticlePreview';
import PaginationItem from '../components/PaginationItem';
import PaginationContainer from './PaginationContainer';

import * as articlesActions from '../actions/articlesActions';

@connect(
  (store) => ({
    articles: store.articles || []
  })
)
export default class ArticlesPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.articlesPerPage = 3;
    // Set amount of fetched articles (updates in componentWillUpdate)
    this.articlesAmount = this.props.articles.articles ?
      Number(this.props.articles.articles.length) : 0;
    // Set current page acording to param passed through router
    this.currentPage = this.props.params.pageNum ?
      Number(this.props.params.pageNum) : 1;
  }

  render() {
    if (this.props.articles.fetching == true)
      return (
        <Loading 
          message={'Loading articles'}
        />
      )
    else
      return (
        <ArticlesListPage 
          renderPagination={this.renderPagination.bind(this)}
          renderArticles={this.renderArticles.bind(this)}
        />
      );
  }

  componentWillUpdate(nextProps) {
    this.articlesAmount = nextProps.articles.articles ?
      Number(nextProps.articles.articles.length) :
      0;
    this.currentPage = nextProps.params.pageNum ?
      Number(nextProps.params.pageNum) : 1;
  }

  /**
   * CUSTOM METHODS
   */
  renderArticles() {
    const articles = this.props.articles.articles || [];
    const startPosition = (this.currentPage - 1) * this.articlesPerPage;  

    return articles
      .filter((article, index) => 
        ((index >= startPosition) && (index <= (startPosition + this.articlesPerPage - 1))))
      .map((article, index) => (
        <ArticlePreview {...article} key={index} />
      )
    );
  }

  renderPagination() {
    return (
      <PaginationContainer
        articles={this.props.articles.articles}
        currentPage={this.props.params.pageNum}
      />
    );
  }

}
