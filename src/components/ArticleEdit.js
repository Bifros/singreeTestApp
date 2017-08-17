import React from 'react';

const ArticleEdit = (props) => (
  <form id="article-edit">
    <div className="form-group top-15">
      <label htmlFor="title">Article Title</label>
      <input type="text" className="form-control blog-input" id="title" name="title" placeholder="New Article" required 
        onChange={props.checkTitle} 
        value={props.title}
      />
    </div>

    <label className="top-15">Article Content</label>
    {props.renderEditor()}
    
    <div onClick={props.onSaveArticle} className="btn btn-block btn-success create-article-submit">Create article</div>
  </form>
);

export default ArticleEdit;