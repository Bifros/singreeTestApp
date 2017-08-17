import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import createLogger from 'redux-logger';
const ReduxThunk = require('redux-thunk').default;

import {fetchArticles} from './actions/articlesActions';
import rootReducer from './reducers/index';

const initialState = {
  articles: {}
}

const store = createStore(
  rootReducer, 
  initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk, createLogger()))
);

store.dispatch(fetchArticles());

export default store;