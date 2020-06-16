import * as actionTypes from '../actionTypes';

const initialState = {
  fixture: null,
  loading: false,
  homePlayerId: null,
  awayPlayerId: null,
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

    case actionTypes.SELECT_PLAYER: {
      let selectedPlayer = {
        homePlayerId: state.homePlayerId === action.playerId ? null : action.playerId,
      }

      if (action.isAway) {
        selectedPlayer = {
          awayPlayerId: state.awayPlayerId === action.playerId ? null : action.playerId,
        }
      }

      return {
        ...state,
        ...selectedPlayer,
      }
    }

    default: return state;
  }
}

export default reducer;
