import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configStore from './redux/configStore';
import App from './containers/App';

import home from './modules/home';
import feature1 from './modules/feature1';
import feature2 from './modules/feature2';

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={home.Page} />
        <Route path="feature1" component={feature1.Page} />
        <Route path="feature2" component={feature2.Page} />
      </Route>
    </Router>
  </Provider>,
  root
);
