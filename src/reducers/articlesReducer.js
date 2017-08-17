
const articlesReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'ARTICLES_ARE_FETCHING': {
      newState.fetching = action.payload;
      return newState;
    }
    
    case 'RECEIVE_ARTICLES': {
      action.payload.map((article) => article.image = getRandImage());
      newState.articles = action.payload;
      newState.fetching = action.fetching;

      return newState;
    }

    case 'FETCH_ARTICLES_ERROR': {
      const articles = require('./../data/data').data.articles;
      
      newState.errors ? 
        newState.errors.push(action.error) : newState.errors = [action.error];

      articles.map((article) => article.image = getRandImage());
      newState.articles = articles;
      newState.fetching = action.fetching;
      
      return newState;
    }

    case 'NEW_ARTICLE_SAVE': {
      newState.articles.unshift(action.article);
      return newState;
    }

    case 'NEW_ARTICLE_ERROR': {
      newState.errors ? 
        newState.errors.push(action.error) : newState.errors = [action.error];

      return newState;
    }

    case 'UPDATE_ARTICLE': {
      const articleIndex = newState.articles.indexOf(newState.articles.filter(
        (article) => article._id == action.payload._id
      )[0]);
      newState.articles[newState.articles.indexOf(articleIndex)] = action.payload;
      console.log(newState);
      return newState;
    }

    default: 
      return newState;
  }
}

export default articlesReducer;