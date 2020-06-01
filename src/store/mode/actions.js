import * as actionTypes from '../actionTypes';

export const setMobileModeActionCreator = (mobile, windowWidth) => {
  return {
    type: actionTypes.SET_MODE,
    mobile,
    windowWidth,
  }
}
