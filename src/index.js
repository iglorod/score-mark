import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './store/authorization/reducer';
import modeReducer from './store/mode/reducer';
import fixtureReducer from './store/fixture/reducer';
import clubReducer from './store/club/reducer';
import playerReducer from './store/player/reducer';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(combineReducers({
  auth: authReducer,
  mode: modeReducer,
  fxt: fixtureReducer,
  club: clubReducer,
  plr: playerReducer,
}), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
