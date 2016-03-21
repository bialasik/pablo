import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './containers/App';
import Welcome from './components/Welcome';
import Section from './components/Section';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Welcome } />
      <Route path="/section/*" component={ Section } />
    </Route>
  </Router>,
  document.getElementById('root')
);
