import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducers';
import thunkMiddleware from 'redux-thunk';

import Main from './components/Main';
import Detail from './components/Detail';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import { fetchMovies } from './actions/actions';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchMovies()).then(() => console.log(store.getState()));

ReactDOM.render(
  <Router>
    <Route component={Header} />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/search/:query?" component={Main} />
      <Route path="/detail/:id?" component={Detail} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
