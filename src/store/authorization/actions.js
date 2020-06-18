import * as actionTypes from '../actionTypes';
import axios from 'axios';

import { storeUserImage, removeUserImage, calculateRefreshTokenDelay, setRefreshTokenTimer } from './utility';

export const startLoadingActionCreator = () => {
  return {
    type: actionTypes.START_LOADING,
  }
}

export const finishLoadingActionCreator = () => {
  return {
    type: actionTypes.FINISH_LOADING,
  }
}

export const loginActionCreator = (userData, rememberMe = false) => {
  return {
    type: actionTypes.LOGIN,
    userData,
    rememberMe,
  }
}

export const setTokenFromLocalStorage = () => {
  return {
    type: actionTypes.SET_LOCAL_TOKEN_DATA,
  }
}

export const authStartActionCreator = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authFinishActionCreator = () => {
  return {
    type: actionTypes.AUTH_FINISH,
  }
}

export const authErrorActionCreator = (error) => {
  return {
    type: actionTypes.AUTH_ERROR,
    error,
  }
}

export const setTimeoutIdActionCreator = (timerId) => {
  return {
    type: actionTypes.RESET_TIMEOUT_ID,
    timerId,
  }
}

export const setUserDataActionCreator = (data) => {
  return {
    type: actionTypes.SET_USER_DATA,
    data,
  }
}

export const setNewTokenActionCreator = (tokens) => {
  return {
    type: actionTypes.SET_TOKEN,
    tokens,
  }
}

export const logoutActionCreator = () => {
  return {
    type: actionTypes.LOGOUT,
  }
}

//middleware
export const resetTokenTimer = (callback) => { //set token auto-refreshing
  return (dispatch, getState) => {
    clearTimeout(getState().auth.refreshTimerId);

    const delay = calculateRefreshTokenDelay(getState().auth.expiresIn);
    const timerId = setRefreshTokenTimer(delay, getState().auth.refreshToken, dispatch, refreshTokenActionCreator, callback);

    if (delay > 0 && callback) {    //fetch user data
      setTimeout(() => dispatch(callback()), 0);
    }

    dispatch(setTimeoutIdActionCreator(timerId));
  }
}

export const signUpActionCreator = (newUser) => {
  return dispatch => {
    dispatch(authStartActionCreator());

    const authData = {
      email: newUser.email,
      password: newUser.password,
      displayName: newUser.login,
      returnSecureToken: true
    }

    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`, authData)
      .then(response => {
        dispatch(loginActionCreator(response.data));
        dispatch(resetTokenTimer());
      })
      .catch(error => dispatch(authErrorActionCreator(error)))
  }
}

export const signInActionCreator = (userData, rememberMe) => {
  return dispatch => {
    dispatch(authStartActionCreator());

    const authData = {
      email: userData.email,
      password: userData.password,
      returnSecureToken: true
    }
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`, authData)
      .then(response => dispatch(loginActionCreator(response.data, rememberMe)))
      .then(() => dispatch(resetTokenTimer()))
      .catch(error => dispatch(authErrorActionCreator(error)))
  }
}

export const signInLocallyActionCreator = () => {
  return (dispatch) => {
    if (localStorage.getItem('idToken')) {
      dispatch(setTokenFromLocalStorage());
      dispatch(resetTokenTimer(fetchLastUserDataActionCreator));
    } else {
      dispatch(finishLoadingActionCreator());
    }
  }
}

export const refreshTokenActionCreator = (token, callback) => {
  return dispatch => {
    axios.post(`https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_FIREBASE_KEY}`, token)
      .then(response => ({
        idToken: response.data.id_token,
        refreshToken: response.data.refresh_token,
        expiresIn: +response.data.expires_in,
      }))
      .then(newTokenData => dispatch(setNewTokenActionCreator(newTokenData))) //refreshing token
      .then(() => dispatch(resetTokenTimer()))
      .then(() => callback ? dispatch(callback()) : null)
      .catch(err => {
        dispatch(authErrorActionCreator(err));
        dispatch(logoutActionCreator());
      });
  }
}

export const updateUserDataActionCreator = ({ username, image }) => {
  return (dispatch, getState) => {
    dispatch(authStartActionCreator());
    const token = getState().auth.idToken;

    const updateData = {};
    if (username) updateData.displayName = username;
    if (image) updateData.photoUrl = image;
    updateData.idToken = token;
    updateData.returnSecureToken = false;

    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_KEY}`, updateData)
      .then(response => response.data)
      .then(({ photoUrl, displayName }) => dispatch(setUserDataActionCreator({ profilePicture: photoUrl, displayName, })))
      .then(() => dispatch(authFinishActionCreator()))
      .catch(error => dispatch(authErrorActionCreator(error)))
  }
}

export const uploadUserImageActionCreator = (userData) => {
  return dispatch => {
    dispatch(authStartActionCreator());
    if (!userData.image) {
      return dispatch(updateUserDataActionCreator(userData));
    }

    storeUserImage(userData.image)
      .then(response => {
        const { name: image } = response.metadata;

        dispatch(removeUserImage(userData.oldImage));
        dispatch(updateUserDataActionCreator({ ...userData, image }));
      })
      .catch(error => dispatch(authErrorActionCreator(error)))
  }
}

export const fetchLastUserDataActionCreator = () => {
  return (dispatch, getState) => {
    const idToken = getState().auth.idToken;

    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_KEY}`, { idToken })
      .then(response => response.data)
      .then(usersList => usersList.users[0])
      .then(userData => dispatch(loginActionCreator({ ...userData, profilePicture: userData.photoUrl })))
      .then(() => dispatch(finishLoadingActionCreator()))
      .catch(error => dispatch(authErrorActionCreator(error)))
  }
}
