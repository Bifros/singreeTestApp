import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

import PopularContainer from './PopularContainer';
import ArchiveContainer from './ArchiveContainer';
import Layout from '../components/Layout';

@connect(
  store =>({
    articles: store.articles || []
  }),
  dispatch => ({})
)
export default class LayoutContainer extends React.Component {

  render() {
    return (
      <Layout 
        articles={this.props.articles.articles || []}
        children={this.props.children}
        renderPopular={this.renderPopular.bind(this)} 
        renderArchive={this.renderArchive.bind(this)}
      />
    );
  }

  renderPopular() {
    return <PopularContainer articles={this.props.articles.articles || []} />
  }  

  renderArchive() {
    return <ArchiveContainer articles={this.props.articles.articles || []} />
  }

}