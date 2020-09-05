/* eslint-disable no-underscore-dangle */
import React from 'react';

import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, Action, compose } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducers';

import MainContainer from './containers/MainContainer';
import DetailContainer from './containers/DetailContainer';
import FetchMovies from './containers/FetchMovies';
import Header from './components/Header';

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <FetchMovies />
    <Router>
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/search/:query?" component={MainContainer} />
        <Route path="/detail/:id?" component={DetailContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
