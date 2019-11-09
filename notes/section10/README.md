# Burger Builder Project: Accessing a Server

The setup for firebase is easier now, just remember to create a **realtime database**. 

## 212. Handling Errors

Checked the `withErrorHandler.js` file.

Create a global error msg handler for all component.

It does not mean that all the components are error free. For instance, the error can happen when data is being fetched, but other components can, and most likely, will use the data. As the error has been handle in the global level, it is possible that the program throw an error undefined or some other error while processing data.

## 214. Removing Old Interceptors

Everytime `withErrorHandler` is called, a new component is created, and therefore can cause multiple interceptors being associated to one component. As `componentWillMount` is triggered, new interceptor instance will be created. With multiple calls of `withErrorHandler`, multiple interceptors will be created, and will reply to the calls, and therefore can cause memory leakage, repeated responses to one events, and possibly change the state without intention.

`componentWillUnmount` can help to clean up interceptors as below:

```javascript
componentWillUnmount() {
            // console.log('will unmount', this.reqInterceptor, this.resInterceptor);
            
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
```

Which, the interceptors will be ejected in the unmounting stage of the component.

