import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';

// router, for http-ajax section
// import {BrowserRouter} from 'react-router-dom';

// the actual burger build app
// import App from './burgerBuilder/App'

// redux app
import App from './redux/src/App'

// ajax as seen here
// import App from './http&ajax/App';

/*
// http&ajax/App related content
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// handle error globally, and edit request header globally
axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

// display error msg locally here if something went wrong above
axios.interceptors.response.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
})
*/

import reducer from './redux/src/store/reducer';
import { Provider } from 'react-redux';

// redux related config here
const store = createStore(reducer);


// burger build dom render, wrap everything in a router component
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root')

// other dom render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);