import * as actionTypes from '../actionTypes';

const initialState = {
  mobile: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODE: {
      return {
        mobile: action.mobile,
      }
    }

    default: return state;
  }
}

export default reducer;
