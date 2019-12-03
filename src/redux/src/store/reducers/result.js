import * as actionTypes from '../actions/actions';

const initialState = {
    results: [],
}

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    let newStateResult = [...newState.results];
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            newStateResult.push(
                { id: new Date(), value: action.result }
            );
            break;
        case actionTypes.DELETE_RESULT:
            newStateResult = newStateResult.filter(result => result.id !== action.id)
            break;
        default:
            break;
    }
    newState.results = newStateResult;
    return newState;
}

export default reducer;
