import React from 'react';
import {Link} from 'react-router';


class ArticlePreview extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="article-preview col-md-12">
          <div className="article-preview-left pull-left">
            <div className="posted-block">
              <div className="posted-wrapper">
                <div className="posted-date">{getPosted('date', this.props.created)}</div>
                <div className="posted-vertical">
                  <div className="posted-day">{getPosted('day', this.props.created)}</div>
                  <div className="posted-year-month">{getPosted('month-year', this.props.created)}</div>  
                </div>
              </div>
            </div>
            <div className="article-image">
              <img src={require('./../../build/images/' + this.props.image)} alt="" />
            </div>
          </div>
          <div className="article-preview-right pull-left">
            <div className="article-preview-title">
              {this.props.title}
            </div>        
            <div className="article-preview-content">
              {this.getShrinkedArticle()}
            </div>
            <div className="read-more">
              <Link to={{pathname: 'action/edit/' + this.props._id}} className="edit">edit</Link>
              <Link to={{pathname: '/article/' + this.props._id}} className="keep-reading">continue reading</Link>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }

  getShrinkedArticle() {
    const articleText = stripTags(this.props.body);
    return  articleText.length > 300 ?
      articleText.substr(0, 300) + '...' : articleText;
  }

};

export default ArticlePreview; 