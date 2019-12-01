import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 4,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    let newIngredients = { ...newState.ingredients };
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            newIngredients[action.ingredientName] = newIngredients[action.ingredientName] + 1;
            newState.totalPrice = state.totalPrice + INGREDIENT_PRICES[action.ingredientName];
            break;
        case actionTypes.REMOVE_INGREDIENT:
            newIngredients[action.ingredientName] = newIngredients[action.ingredientName] - 1;
            newState.totalPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
            break;
        default:
            break;
    }
    newState.ingredients = newIngredients;
    return newState;
};

export default reducer;