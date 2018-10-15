import * as actionTypes from '../actions/actionsTypes';

const initalState = {
  orders: []
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS:
    return {
      ...state,
      orders: state.orders.concat(action.payload)
    };

    case actionTypes.GET_ORDERS: 
    return {
      ...state,
      orders: action.payload
    };
  
    default: 
      return state;
  }
};

export default reducer;