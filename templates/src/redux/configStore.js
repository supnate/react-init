import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({ collapsed: true });
const middlewares = [thunk, logger];

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers');
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
