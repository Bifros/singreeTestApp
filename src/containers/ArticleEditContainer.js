import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TinyMCE from 'react-tinymce';
import validator from 'validator';

import ArticleEdit from '../components/ArticleEdit';
import * as articlesActions from '../actions/articlesActions';
 
@connect(
  (store, {params}) => ({
    activeArticle: store.articles.articles.filter((article) => article._id == params.articleId)[0]
  }),
  (dispatch) => ({
    actions: bindActionCreators(articlesActions, dispatch)
  })
)
export default class ArticleEditContainer extends React.Component {

  componentWillMount() {
    this.articleBody = '';
  }

  render() {
    return (
      <ArticleEdit
        title={this.props.activeArticle.title}
        renderEditor={this.renderEditor.bind(this)}
        handleEditorChange={this.handleEditorChange.bind(this)}
        onSaveArticle={this.onSaveArticle.bind(this)}
        checkTitle={this.checkTitle.bind(this)}
      />
    );
  }

  renderEditor() {
    return (
      <TinyMCE
        content={this.getArticleContent()}
        config={{
          height: 380,
          menubar: false,
          statusbar : false,
          fontsize_formats: "14px 15px 16px 18px 24px",
          plugins: 'autolink link image lists print preview',
          toolbar: 'undo redo | bold italic | fontsizeselect | link image | preview'
        }}
        onChange={this.handleEditorChange.bind(this)}
      />
    );
  }

  handleEditorChange(e) {
    this.articleBody = e.target.getContent();
  }

  getArticleContent() {
    console.log(this.activeArticle);
    return this.props.activeArticle.body || '';
  }

  onSaveArticle() {
    const form = document.forms['article-edit'];

    const updatedArticle = {
      _id: this.props.activeArticle._id,
      title: form.elements['title'].value,
      author: this.props.activeArticle.author,
      authorName: this.props.activeArticle.authorName,
      status: 'active',
      metaTitle: this.props.activeArticle.metaTitle,
      metaDescription: 'descsription',
      metaKeywords: 'keywords',
      body: this.articleBody,
      image: getRandImage()
    }
    this.props.actions.onEditArticle(updatedArticle);
  }

  checkTitle(e) {
    const title = e.target;
    return title.style.borderColor = title.value.length > 2 ?
      'green' : 'red';
  }

}
