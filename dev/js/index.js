import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

// Redux and middleware imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';


// Components and reducers import
import App from "./components/app";
import reducers from './reducers';

// Apply ReduxPromise middleware with store creation
const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Render app inside of Provider so it has access to store. Pass in ALL reducers
ReactDOM.render(
    <Provider store={storeWithMiddleware(reducers)}>
      <App/>
    </Provider>
    , document.getElementById('root'));
