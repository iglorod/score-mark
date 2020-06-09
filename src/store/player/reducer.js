import * as actionTypes from '../actionTypes';

const initialState = {
  stats: [],
  transfers: [],
  sidelined: [],
  availibleSeasons: [],
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_PLAYER_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    case actionTypes.FINISH_PLAYER_LOADING: {
      return {
        ...state,
        loading: false,
      }
    }

    case actionTypes.SET_PLAYER_STATS: {
      return {
        ...state,
        stats: [...action.stats],
      }
    }

    case actionTypes.SET_PLAYER_TRANSFERS: {
      return {
        ...state,
        transfers: [...action.transfers],
      }
    }

    case actionTypes.SET_PLAYER_SIDELINES: {
      return {
        ...state,
        sidelined: [...action.sidelined],
      }
    }

    case actionTypes.SET_AVAILIBLE_SEASONS: {
      return {
        ...state,
        availibleSeasons: [...action.seasons].reverse(),
      }
    }

    case actionTypes.CLEAR_PLAYER_DATA: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default reducer;
