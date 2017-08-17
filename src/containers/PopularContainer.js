import React from 'react';

import Popular from '../components/Popular';

class PopularContainer extends React.Component {

  render() {
    return (
      <div className="popular">
        <div className="popular-title">
          &nbsp;<span className="glyphicon glyphicon-star" aria-hidden="true"></span>&nbsp; Popular
        </div>
          {this.renderPopularArticles()}
      </div>
    )
  }

  renderPopularArticles() {
    return this.props.articles
      .slice(0, 2)
      .map((article, index) => 
        <Popular 
          {...article} 
          elementId={index} 
          key={index} 
        />);
  }

} 

export default PopularContainer;