# Redux

## 284. Understanding the Redux Flow

**Reducers** - Receive action and update State, *pure, sync functions, no side-effects!*

## 285. Setting Up Reducer and Store

[redux-basics.js](../../src/redux-basics.js) are NodeJS style of files, not react, since redux is a third-party independent package, it can and will work without react.

- No matter how many reducers are created, at the end, there is only one root reducer which combines everything.
- Before create a store, we 1st need a reducer.
- Reducer takes 2 arguments, 1 is the old state, the other is the action taken to manage the old state.
- The initial state must be passed to reducer, otherwise it will return undefined. (I think it makes sense... Reducer needs to reduce something)

## 286. Dispatching Actions

- `type` property is mandatory in every action.

## 287. Adding Subscriptions

- Subscription is typically set right after store was created, so that we get informed any furture dispatches. The function in the suscribe method will be executed whenever an action is dispatched and mutates store.

## 288. Connecting React to Redux

Store should be created right before or when the application is starts. So the `index.js` is the perfect place.