import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case actionTypes.INCREMENT:
            newState.counter = newState.counter + 1;
            break;
        case actionTypes.DECREMENT:
            newState.counter = newState.counter - 1;
            break;
        case actionTypes.ADD:
            newState.counter = newState.counter + action.payload.value;
            break;
        case actionTypes.SUBTRACT:
            newState.counter = newState.counter - action.payload.value;
            break;
        default:
            break;
    }
    return newState;
}

export default reducer;
