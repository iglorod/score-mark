import * as actionTypes from '../actionTypes';

const initialState = {
  mobile: true,
  windowWidth: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODE: {
      return {
        mobile: action.mobile,
        windowWidth: action.windowWidth,
      }
    }

    default: return state;
  }
}

export default reducer;
