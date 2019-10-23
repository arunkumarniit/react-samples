import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducers from "./myreducers";

const combReducers = combineReducers({ emps: reducers });

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStore(combReducers)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
