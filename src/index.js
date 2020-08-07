import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "../public/styles.css";
import App from "./app";
import store from "./redux/rootStore";

const Main = (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
