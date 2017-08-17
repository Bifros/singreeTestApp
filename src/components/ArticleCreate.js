import React from 'react';

const ArticleCreate = (props) => (
  <form id="article-create">
    <div className="row top-15">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" onChange={props.checkName} className="form-control blog-input" id="author" name="author" placeholder="Author Name" required />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="Email" onChange={props.checkEmail} className="form-control blog-input" id="email" name="email" placeholder="Example@email.com" required />
        </div>
      </div>
    </div>

    <div className="form-group top-15">
      <label htmlFor="title">Article Headline</label>
      <input type="text" onChange={props.checkHeadline} className="form-control blog-input" id="title" name="title" placeholder="New Article" required />
    </div>

    <label className="top-15">Article Content</label>
    {props.renderEditor()}
    
    <div onClick={props.onCreateArticle} className="btn btn-block btn-success create-article-submit">Create article</div>
  </form>
);

export default ArticleCreate;