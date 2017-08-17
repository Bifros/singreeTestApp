import React from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import TinyMCE from 'react-tinymce';

import Comment from '../components/Comment';
import Article from '../components/Article';
import {addComment} from './../actions/commentsActions';

@connect(
  // Second param should be "ownProps". It got distructured in order to get params -> ownProps.params
  (store, {params}) => ({
    activeArticle: store.articles.articles.filter((article) => article._id == params.articleId)[0],
    store
  })
)
export default class ArticleContainer extends React.Component {

  constructor(props) {
    super(props);
    this.commentBody = '';
  }

  render() {
    return (
      <Article 
        handleEditorChange={this.handleEditorChange.bind(this)}
        onAddNewComment={this.onAddNewComment.bind(this)}
        validateEmail={this.validateEmail.bind(this)}
        validateName={this.validateName.bind(this)}
        renderComments={this.renderComments.bind(this)}
        renderEditor={this.renderEditor.bind(this)}
        activeArticle={this.props.activeArticle}        
      />
    );
  }

  renderComments() {
    return this.props.activeArticle.comments.map((comment, index) => (
      <Comment {...comment} key={index} />
    ));
  }
  
  renderEditor() {
    return (
      <TinyMCE
        content="<p>Place your comment here...</p>"
        config={{
          height: 190,
          menubar: false,
          statusbar : false,
          fontsize_formats: "14px 15px 16px 18px 24px",
          plugins: 'autolink link image lists print preview',
          toolbar: 'undo redo | bold italic | fontsizeselect |'
        }}
        onChange={this.handleEditorChange.bind(this)}
      />
    );
  }

  onAddNewComment(e) {
    e.preventDefault();
    const form = document.forms['leave-comment'];

    if (this.checkFormValidation(form)) {
      const newComment = {
        articleId: this.props.params.articleId,
        text: this.commentBody,
        author: this.refs.authorEmail.value,
        authorName: this.refs.authorName.value
      };

      this.props.dispatch(addComment(newComment));
    }
  }

  checkFormValidation(form) {
    if (!this.isCommentValid()) {
      alert('Please leave a comment.');
      return false;
    }
    if (!this.isNameValid(form.elements['name'].value)) {
      alert('Please put your name.');
      return false;
    }
    if (!this.isEmailValid(form.elements['email'].value)) {
      alert('Please spell your email correctly.');
      return false;
    }
    return true;
  }

  isCommentValid() {
    const strippedComment = this.commentBody.replace(/<(?:.|\n)*?>/gm, '');
    return strippedComment.length > 0;
  }

  // Author name validation
  validateName(e) {
    const nameField = e.target;

    nameField.style.borderColor = 
      this.isNameValid(nameField.value) ? 'green' : 'red';
  }

  isNameValid(name) {
    if (name)
      return name.length > 2;
    return false;
  }

  // Email validation 
  validateEmail(e) {
    const emailField = e.target;

    emailField.style.borderColor = 
      this.isEmailValid(emailField.value)? 'green' : 'red';
  }

  isEmailValid(email) {
    return validator.isEmail(email);  
  }

  handleEditorChange(e) {
    this.commentBody = e.target.getContent();
  }

} 