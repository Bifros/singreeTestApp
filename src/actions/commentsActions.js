import axios from 'axios';

export const addComment = comment => (
  dispatch => (
    axios.post('http://api.blog.dev.singree.com/comment/', comment).then(
      response => dispatch(commentAdded(response)),
      error => dispatch(commentFailedToAdd(error))
    )
  )
);

const commentAdded = (response) => ({
  type: 'COMMENT_ADDED',
  payload: response
});

const commentFailedToAdd = (response) => ({
  type: 'COMMENT_FAILED_TO_ADD',
  payload: response
});

