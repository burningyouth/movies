/* eslint-disable no-underscore-dangle */
import React from 'react';

import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import { MainContainer } from './containers/MainContainer';
import { DetailContainer } from './containers/DetailContainer';
import { FetchMovies } from './containers/FetchMovies';
import { Header } from './components/Header';
import { Error } from './components/Error';
import { rootReducer } from './reducers';

import * as serviceWorker from './serviceWorker';

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route>
        <Header />
        <FetchMovies />
      </Route>
      <Switch>
        <Route exact path="/">
          <MainContainer />
        </Route>
        <Route path="/detail/:id?">
          <DetailContainer />
        </Route>
        <Route path="*">
          <Error message="Page not found!" />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
