import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import articlesReducer from './articlesReducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  routing: routerReducer
});

export default rootReducer;