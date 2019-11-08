# Reaching out to the Web (HTTP/Ajax)

Check [http&ajax](../../src/http&ajax/App.js).

One interesting website - [My Json Server](http://jsonplaceholder.typicode.com/), a "Fake Online REST API for Testing and Prototyping".

**ComponentDidMount is the best place to send HTTP Request!**

## 200. Adding Interceptors to Execute Code Globally

A really useful feature to set something globally.

```javascript
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
```

Set it at most outter component, i.e., `index.js`.

Can also check [axios](https://github.com/axios/axios#interceptors) official document for more details.

## 202. Setting a Default Global Configuration for Axios

Also set something globally as below:

```javascript
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
```

## 203. Creating and Using Axios Instances

Create instance in js file such as:

```javascript
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM AXIOS INSTANCE';

export default instance;
```

Then import such file instead of axios package.