import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import store from './store';
import {Provider} from 'react-redux';

import {loadWikiPages} from './action-creators';
import AddPage from './AddPage';
import WikiPagesContainer from './WikiPagesContainer';
import Layout from './Layout';

const onWikiPagesEnter = function(nextRouterState) {
  store.dispatch(loadWikiPages());
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}  >
        <Route path="/wiki" component={WikiPagesContainer} onEnter={onWikiPagesEnter} />
        <Route path="/wiki/add" component={AddPage} />
        <IndexRedirect to="/wiki" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
