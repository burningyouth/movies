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
import Error from './components/Error';

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
    <Router>
      <Route>
        <Header />
      </Route>
      <Route>
        <FetchMovies />
      </Route>
      <Switch>
        <Route exact path="/">
          <MainContainer />
        </Route>
        <Route path="/search/:query?">
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
