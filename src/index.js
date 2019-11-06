import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './burgerBuilder/App'
import App from './http&ajax/App';
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
  
  ReactDOM.render(<App />, document.getElementById('root')
  );