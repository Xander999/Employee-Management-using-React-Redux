import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer1 from './store/reducers/reducer1';
import reducer_add from './store/reducers/reducer_add';
import reducer_dashboard from './store/reducers/reducer_dashboard'


//custom made middleware made to show current state, action and next changed state made by the action
//thunk is a predefined 
const logger = () =>{
  return next => {
    return action => {
      console.log('[Middleware] present state ',store.getState());
      console.log('[Middleware Dispatching] ', action);
      const result = next(action);
      console.log('[Middleware] next state ',store.getState());
      return result;
    }
  }
};

const rootReducer=combineReducers({
  redapp : reducer1,
  redadd : reducer_add,
  reddas : reducer_dashboard
});


//creation of store
const store=createStore(rootReducer, applyMiddleware(logger, thunk));

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
