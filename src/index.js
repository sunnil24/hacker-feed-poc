import React from "react";
import ReactDOM from "react-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

// styles
import "./index.css";

//components
import App from "./components/App";

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
