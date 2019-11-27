const initialState = {
    counter: 0,
    results: [],
}

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    const newStateResult = [...newState.results];
    switch (action.type) {
        case 'INCREMENT':
            newState.counter = newState.counter + 1;
            break;
        case 'DECREMENT':
            newState.counter = newState.counter - 1;
            break;
        case 'ADD':
            newState.counter = newState.counter + action.payload.value;
            break;
        case 'SUBTRACT':
            newState.counter = newState.counter - action.payload.value;
            break;
        case 'STORE_RESULT':
            newStateResult.push(
                { id: new Date(), value: newState.counter }
            );
            break;
        case 'DELETE_RESULT':
            const id = 2;
            newStateResult.splice(id, 1);
            break;
        default:
            break;
    }
    newState.results = newStateResult;

    return newState;
}

export default reducer
