import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Detail from './components/Detail';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';

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
