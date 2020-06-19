import * as actionTypes from '../actionTypes';

const initialState = {
  mobile: true,
  windowWidth: 0,
  url: null,
  identifier: null,
  title: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODE: {
      return {
        mobile: action.mobile,
        windowWidth: action.windowWidth,
      }
    }

    case actionTypes.OPEN_COMMENTS: {
      return {
        ...state,
        url: action.url,
        identifier: action.identifier,
        title: action.title,
      }
    }

    case actionTypes.CLOSE_COMMENTS: {
      return {
        ...state,
        identifier: null,
        title: null,
      }
    }

    default: return state;
  }
}

export default reducer;
