import * as actionTypes from '../actions/actionsTypes';

const INGREDIENT_PRICE = {
  meat: 10,
  cheese: 5,
  bacon: 20,
  salad: 8
};

const initialState = {
  ingredients: {
    meat: 0,
    cheese: 0,
    bacon: 0,
    salad: 0
  },
  totalPrice: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: 
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1 
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload]
      };
    case actionTypes.REMOVE_INGREDIENT: 
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.payload]: state.ingredients[action.payload] - 1
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload]
    };

    default: 
      return state;
  }
}

export default reducer;