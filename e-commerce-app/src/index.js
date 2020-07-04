import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  products : productReducer,
  cart : cartReducer
});
const store = createStore(rootReducer, composeEnhancers());
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
