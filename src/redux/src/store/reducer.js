// this reducer is not needed anymore

// import * as actionTypes from './actions';

// const initialState = {
//     counter: 0,
//     results: [],
// }

// const reducer = (state = initialState, action) => {
//     const newState = Object.assign({}, state);
//     let newStateResult = [...newState.results];
//     switch (action.type) {
//         case actionTypes.INCREMENT:
//             newState.counter = newState.counter + 1;
//             break;
//         case actionTypes.DECREMENT:
//             newState.counter = newState.counter - 1;
//             break;
//         case actionTypes.ADD:
//             newState.counter = newState.counter + action.payload.value;
//             break;
//         case actionTypes.SUBTRACT:
//             newState.counter = newState.counter - action.payload.value;
//             break;
//         case actionTypes.STORE_RESULT:
//             newStateResult.push(
//                 { id: new Date(), value: newState.counter }
//             );
//             break;
//         case actionTypes.DELETE_RESULT:
//             newStateResult = newStateResult.filter(result => result.id !== action.id)
//             break;
//         default:
//             break;
//     }
//     newState.results = newStateResult;
//     return newState;
// }

// export default reducer
