import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import App from './components/App'

// Import The bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css';

import reducers from './reducers'

window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
