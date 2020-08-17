import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "../public/styles.css";
import AppConnected from "./app";
import store from "./redux/rootStore";

const Main = (props) => {
  return (
      <Provider store={store}>
        <AppConnected />
      </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
