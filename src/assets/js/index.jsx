import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Test from './components/Test';

const routes = window.routes.directory.map(directory => <Route path={directory.name.toLowerCase()} component={Test} />);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>{routes}</Route>
  </Router>,
  document.getElementById('app')
);