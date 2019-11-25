const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    let count = 0;
    switch (action.type) {
        case 'INCREMENT':
            count = state.counter + 1;
            break;
        case 'DECREMENT':
            count = state.counter - 1;
            break;
        case 'ADD':
            count = state.counter + action.payload.value;
            break;
        case 'SUBTRACT':
            count = state.counter - action.payload.value;
            break;
        default:
            count = state.counter
            break;
    }

    return {counter: count};
}

export default reducer
