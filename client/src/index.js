import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from 'redux-thunk';

const jwtToken = localStorage.getItem('Token')

const middlewares = [thunk]

const store = createStore(rootReducer, {
    auth: {
        token: jwtToken,
        isAuth: jwtToken ? true : false
    }
}, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
