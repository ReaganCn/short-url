import React, { Fragment } from "react";
import { connect } from "react-redux";

import SignInConnected from "./views/containers/SignInContainer";
import ShortConnected from "./views/containers/ShortContainer";
import HomeConnected from "./views/containers/HomeContainer";

const mapStateToProps = ({ app }) => {
  return {
    state: app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const App = (props) => {
  return (
    <Fragment>
      {props.state.isLoggedin ? <HomeConnected /> : <SignInConnected />}
      
      
    </Fragment>
  );
};

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
