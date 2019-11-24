const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0,
};

// reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter+1,
        }
    } else if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }
    return state;
};

// store
const store = createStore(rootReducer);

// subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});

// dipatching action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

