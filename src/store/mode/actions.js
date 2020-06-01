import * as actionTypes from '../actionTypes';

export const setMobileModeActionCreator = (mobile) => {
  return {
    type: actionTypes.SET_MODE,
    mobile,
  }
}
