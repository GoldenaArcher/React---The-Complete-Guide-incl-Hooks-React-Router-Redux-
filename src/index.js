import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// router, for http-ajax section
import { BrowserRouter } from 'react-router-dom';

// the actual burger build app
// import App from './burgerBuilder/App';

// redux app
import App from './redux/src/App'

// ajax as seen here
// import App from './http&ajax/App';


// http&ajax/App related content
// import axios from 'axios';

// axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// // handle error globally, and edit request header globally
// axios.interceptors.request.use(request => {
//   console.log(request);
//   return request;
// }, error => {
//   console.log(error);
//   return Promise.reject(error);
// });

// // display error msg locally here if something went wrong above
// axios.interceptors.response.use(request => {
//   console.log(request);
//   return request;
// }, error => {
//   console.log(error);
//   return Promise.reject(error);
// })

import couterReducer from './redux/src/store/reducers/counter';
import resultReducer from './redux/src/store/reducers/result';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: couterReducer,
  result: resultReducer,
});

// // redux related config here
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  // const store = createStore(rootReducer,
  applyMiddleware(logger, thunk)));

// burger build dom render, wrap everything in a router component
/*
import reducer from './burgerBuilder/store/reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/

const app = (<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>)
ReactDOM.render(<React.Fragment>{app}</React.Fragment>, document.getElementById('root'));

// redux dom render
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.getElementById('root')
// );

// App for assignment 5

//  import App from './Assignment/Assignment5/src/App';
// ReactDOM.render(<App />, document.getElementById('root'));