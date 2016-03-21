import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './containers/App';
import Detail from './containers/Detail';
import Home from './components/Home';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/*" component={ Detail } />
    </Route>
  </Router>,
  document.getElementById('root')
);
