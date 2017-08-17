import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TinyMCE from 'react-tinymce';
import validator from 'validator';

import ArticleCreate from '../components/ArticleCreate';
import * as articlesActions from '../actions/articlesActions';
 
@connect(
  (store) => ({
    articles: store.articles || []
  }),
  (dispatch) => ({
    actions: bindActionCreators(articlesActions, dispatch)
  })
)
export default class ArticleCreateContainer extends React.Component {

  componentWillMount() {
    this.articleBody = '';
  }

  render() {
    return (
      <ArticleCreate 
        renderEditor={this.renderEditor.bind(this)}
        handleEditorChange={this.handleEditorChange.bind(this)}
        onCreateArticle={this.onCreateArticle.bind(this)}
        checkName={this.checkName.bind(this)}
        checkEmail={this.checkEmail.bind(this)}
        checkHeadline={this.checkHeadline.bind(this)}
      />
    );
  }

  renderEditor() {
    return (
      <TinyMCE
        content="<p>Article content goes here...</p>"
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

  onCreateArticle() {
    const form = document.forms['article-create'];

    const newArticle = {
      title: form.elements['title'].value,
      author: form.elements['email'].value,
      authorName: form.elements['author'].value,
      status: 'active',
      metaTitle: form.elements['title'].value,
      metaDescription: 'descsription',
      metaKeywords: 'keywords',
      body: this.articleBody,
      image: getRandImage()
    }

    this.props.actions.onCreateNewArticle(newArticle);
  }

  checkEmail(e) {
    const email = e.target;
    return email.style.borderColor = validator.isEmail(email.value) ?
      'green' : 'red';
  }

  checkName(e) {
    const name = e.target;
    return name.style.borderColor = name.value.length > 2 ?
      'green' : 'red';
  }

  checkHeadline(e) {
    const headline = e.target;
    return headline.style.borderColor = headline.value.length > 2 ?
      'green' : 'red';
  }

}