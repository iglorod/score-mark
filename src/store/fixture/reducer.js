import * as actionTypes from '../actionTypes';

const initialState = {
  fixture: null,
  loading: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FIXTURE_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    case actionTypes.FINISH_FIXTURE_LOADING: {
      return {
        ...state,
        loading: false,
      }
    }

    case actionTypes.SET_FIXTURE: {
      return {
        ...state,
        fixture: action.fixture,
      }
    }

    default: return state;
  }
}

export default reducer;
