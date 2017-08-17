import React from 'react';

const Article = (props) => (
  <div className="row">
    <div className="full-article-header">
      <div className="posted-block">
        <div className="posted-wrapper">
          <div className="posted-date">{getPosted('date', props.activeArticle.created)}</div>
          <div className="posted-vertical">
            <div className="posted-day">{getPosted('day', props.activeArticle.created)}</div>
            <div className="posted-year-month">{getPosted('month-year', props.activeArticle.created)}</div>  
          </div>
        </div>
      </div>
      <div className="article-image-full" style={{ 
        backgroundImage: "url(" + require('./../../build/images/Fullsize-1.png') + ")",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}>
      </div>
      <div className="under-image">
        <div className="pull-left">
          <span className="glyphicon glyphicon-tags"></span> Tag, Tag, Tag
        </div>
        <div className="pull-right">
          <span className="glyphicon glyphicon-comment"></span> (999) &nbsp;&nbsp;&nbsp;
          <span className="glyphicon glyphicon-eye-open"></span> (999)
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
    <div className="article-full-title">
      {props.activeArticle.title}
    </div>
    <div className="col-md-12 article-full-content" dangerouslySetInnerHTML={{__html: props.activeArticle.body}}>
      {/*FULL ARTICLE GOES HERE*/}
    </div>

    <div className="comments-title">Comments:</div>
    <div id="comments">
      {props.renderComments()}
    </div>

    <form id="leave-comment">
      <div className="row ne-row">
        <div className="col-md-6">
          <input type="text" name="name" onChange={props.validateName} className="form-control blog-input" placeholder="name" />
        </div>
        <div className="col-md-6">
          <input type="email" name="email" onChange={props.validateEmail} className="form-control blog-input" placeholder="email" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {props.renderEditor()}
          <button className="btn btn-success btn-block submit-comment" onClick={props.onAddNewComment}>Submit Comment</button>
        </div>
      </div>
    </form>
  </div>
);
  
export default Article;