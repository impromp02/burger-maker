import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  idToken: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_TOKEN: 
      return {
        ...state,
        idToken: action.payload
      };
    default: 
      return state;
  }
}

export default reducer;