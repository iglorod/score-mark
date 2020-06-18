import * as actionTypes from '../actionTypes';
import { message } from 'antd';
import { saveToLocalStorage, clearLocalStorage } from './utility';

const initialState = {
  localId: null,
  email: null,
  displayName: '',
  profilePicture: '',
  idToken: null,
  refreshToken: null,
  expiresIn: null,
  refreshTimerId: null,
  loading: true,
  submitting: false,
  errorMessage: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING: {
      return {
        ...state,
        errorMessage: null,
        loading: true,
      }
    }

    case actionTypes.FINISH_LOADING: {
      return {
        ...state,
        loading: false,
      }
    }

    case actionTypes.AUTH_START: {
      return {
        ...state,
        submitting: true,
        errorMessage: null,
      }
    }

    case actionTypes.AUTH_FINISH: {
      return {
        ...state,
        submitting: false,
      }
    }

    case actionTypes.AUTH_ERROR: {
      let errorMessage = 'Service is unavailable. Please, try later...';
      if (action.error.response) errorMessage = action.error.response.data.error.message;

      return {
        ...state,
        errorMessage,
        submitting: false,
      }
    }

    case actionTypes.LOGIN: {
      if (action.rememberMe) {
        saveToLocalStorage({
          idToken: action.userData.idToken,
          refreshToken: action.userData.refreshToken,
          expiresIn: action.userData.expiresIn,
        });
      }

      const expiresIn = Math.floor((new Date().getTime() / 1000)) + +action.userData.expiresIn;

      return {
        ...initialState,
        loading: false,
        localId: action.userData.localId,
        email: action.userData.email,
        displayName: action.userData.displayName,
        profilePicture: action.userData.profilePicture || '',
        idToken: action.userData.idToken || state.idToken,
        refreshToken: action.userData.refreshToken || state.refreshToken,
        expiresIn: expiresIn || state.expiresIn,
        submitting: false,
      }
    }

    case actionTypes.SET_LOCAL_TOKEN_DATA: {
      return {
        idToken: localStorage.getItem('idToken'),
        refreshToken: localStorage.getItem('refreshToken'),
        expiresIn: localStorage.getItem('expiresIn'),
      }
    }

    case actionTypes.RESET_TIMEOUT_ID: {
      return {
        ...state,
        refreshTimerId: action.timerId,
      }
    }

    case actionTypes.SET_TOKEN: {
      if (localStorage.length > 1) {
        saveToLocalStorage(action.tokens);
      }

      return {
        ...state,
        idToken: action.tokens.idToken,
        refreshToken: action.tokens.refreshToken,
        expiresIn: action.tokens.expiresIn,
      }
    }

    case actionTypes.SET_USER_DATA: {
      message.success('Profile data was updated');
      saveToLocalStorage({
        idToken: action.data.idToken,
        refreshToken: action.data.refreshToken,
        expiresIn: action.data.expiresIn,
      })
      return {
        ...state,
        ...action.data,
      }
    }

    case actionTypes.LOGOUT: {
      clearLocalStorage([...Object.keys(initialState)]);
      clearTimeout(state.refreshTimerId);
      return { ...initialState, loading: false }
    }

    default: return state;
  }
}

export default reducer;
