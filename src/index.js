import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
require('./globals');

import LayoutContainer from './containers/LayoutContainer';
import ArticlesPageContainer from './containers/ArticlesPageContainer';
import ArticleCreateContainer from './containers/ArticleCreateContainer';
import ArticleEditContainer from './containers/ArticleEditContainer';
import ArticleContainer from './containers/ArticleContainer';
import Error404 from './components/Error404';

import store from './store';
require('./stylus/styles.styl');

const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={LayoutContainer} >       
        <Route path="/" component={ArticlesPageContainer}></Route>
        <Route path="/page/:pageNum" component={ArticlesPageContainer}></Route>
        <Route path="/article/:articleId" component={ArticleContainer}></Route>
        <Route path="/action/">
          <Route path="create" component={ArticleCreateContainer}></Route>
          <Route path="edit/:articleId" component={ArticleEditContainer}></Route>
        </Route>
        <Route path="/404" component={Error404}></Route>
      </Route>
    </Router>
  </Provider>
); 

render(router, document.getElementById('app'));