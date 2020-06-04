import * as actionTypes from '../actionTypes';
import axios from 'axios';

import { fetchFixture } from '../../FakeData/FakeData';

export const startLoadingActionCreator = () => {
  return {
    type: actionTypes.START_FIXTURE_LOADING,
  }
}

export const finishLoadingActionCreator = () => {
  return {
    type: actionTypes.FINISH_FIXTURE_LOADING,
  }
}

export const setFixtureActionCreator = (fixture) => {
  return {
    type: actionTypes.SET_FIXTURE,
    fixture,
  }
}

export const selectPlayerActionCreator = (playerId, isAway) => {
  return {
    type: actionTypes.SELECT_PLAYER,
    playerId,
    isAway,
  }
}

export const fetchFixturesActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    dispatch(startLoadingActionCreator());
    fetchFixture()
      .then(response => response.api.results.fixtures[0])
      .then(fixture => dispatch(setFixtureActionCreator(fixture)))
      .then(() => dispatch(finishLoadingActionCreator()))
      .catch(error => console.log(error))
  }
}
