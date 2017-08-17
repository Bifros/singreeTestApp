import axios from 'axios';
import {createNotification} from '../custom/NotificationsManager';
import { browserHistory } from 'react-router';

const receiveArticles = (articles) => {
  fetchingArticles(false);
  return {
    type: 'RECEIVE_ARTICLES',
    status: 'success',
    payload: articles,
    fatching: false
  }
}

const fetchArticlesError = (error) => {
  fetchingArticles(false);
  return {
    type: 'FETCH_ARTICLES_ERROR',
    error: error,
    fatching: false
  }
}

const fetchingArticles = (flag = false) => {
  return {
    type: 'ARTICLES_ARE_FETCHING',
    payload: flag
  }
}

export const fetchArticles = () => {
  return dispatch => {
    dispatch(fetchingArticles(true));
    return axios.get('http://api.blog.dev.singree.com/' ).then(
      response => {
        const articles = response.data.articles;

        dispatch(receiveArticles(articles));

        createNotification(
          'Articles fetched successfully!',
          `All ${articles.length} articles will be avaliable in blog list.`,
          'success'
        );
      },
      error => {
        dispatch(fetchArticlesError(error));
        createNotification(
          'An Error occured',
          `Unfortunatly articles cannot be loaded, they will be replaced with fake articles to test functionality.`,
          'danger'
        );
      }
    ) // .then
  } // return dispatch => 
}


export const saveArticleChanges = (article) => {
  return {
    type: 'SAVE_ARTICLE_CHANGES',
    article
  }
} 


export const saveNewArticle = (article) => {
   return {
    type: 'NEW_ARTICLE_SAVE',
    article
  }
}

export const newArticleError = (error) => {
  return {
    type: 'NEW_ARTICLE_ERROR',
    error
  }
}

export const onCreateNewArticle = (article) => {
  return (dispatch) => (
    axios.post('http://api.blog.dev.singree.com/', article).then(
      response => {
        const newArticle = response.data;
        dispatch(saveNewArticle(newArticle));
      },
      error => {
        dispatch(newArticleError(error));
        createNotification(
          'An Error occured',
          `Unfortunatly new article cannot be uploaded for next reason: ${error}`,
          'danger'
        );
      }
    )
  )
};


export const updateArticle = (article) => {
   return {
    type: 'UPDATE_ARTICLE',
    payload: article
  }
}

export const onEditArticle = (article) => {
  return (dispatch) => (
    axios.put(`http://api.blog.dev.singree.com/${article._id}`, article).then(
      response => {
        const newArticle = response.data;
        dispatch(updateArticle(newArticle));
        createNotification(
          'Article successfully updated',
          `Article ${newArticle.title} has been updated!`,
          'success'
        );
        browserHistory.push('/');
      },
      error => {
        dispatch(newArticleError(error));
        createNotification(
          'An Error occured',
          `Unfortunatly article could not be updated for next reason: ${error}`,
          'danger'
        );
      }
    ).catch((error) => {
      createNotification(
        'An Error occured',
        `Unfortunatly article could not be updated for next reason: ${error}`,
        'danger'
      );
    })
  )
};