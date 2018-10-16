import * as actionTypes from './actionsTypes';

export const saveToken = (token) => {
  return {
    type: actionTypes.SAVE_TOKEN,
    payload: token
  };
};