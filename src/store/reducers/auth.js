import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  loggedIn: false,
  idToken: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loggedIn: true,
        idToken: action.payload
      };
      
    case actionTypes.LOGOUT: 
      return {
        ...state,
        loggedIn: false,
        idToken: null
      };

    default: 
      return state;
  }
}

export default reducer;