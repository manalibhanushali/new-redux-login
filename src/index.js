import "./style.css";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import store from "./redux";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
