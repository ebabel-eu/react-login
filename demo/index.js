import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './app';
import reducers from './reducers';

const root = document.getElementById('root');
const store = createStore(reducers, /* preloadedState, */
  composeWithDevTools(
    // applyMiddleware(...middleware), Note: applyMiddleware can be imported from 'redux'.
    // other store enhancers if any
  ));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
