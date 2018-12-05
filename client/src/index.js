import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import App from './components/App'

// Import The bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers'
const store = createStore(reducers, {}, applyMiddleware());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
