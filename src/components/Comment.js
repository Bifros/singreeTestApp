import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment-wrapper">
        {this.props.authorName} <br/>
        {this.props.created} <br/>
        <div className="comment-text" dangerouslySetInnerHTML={{ __html: this.props.text}}>
        </div>
      </div>
    )
  }

} 

export default Comment;