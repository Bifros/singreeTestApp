const commentsReducer = (state = {}, action) => {
  let {from, to} = action;
  return state;
  switch (action.type) {
    case 'COMMENT_ADDED':
      return {
        ...state, 
        articles: state.articles.map(article => {
          article._id == action.payload.articleId ?
            {...article, comments: article.comments.push(action.payload)} :
            article
        })
      }
    default: 
      return state;
  }
}
export default commentsReducer;