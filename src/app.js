import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import SignInConnected from "./views/containers/SignInContainer";
import ShortConnected from "./views/containers/ShortContainer";
import HomeConnected from "./views/containers/HomeContainer";
import { receiveUser } from "./redux/app/actions";

const mapStateToProps = ({ app }) => {
  return {
    state: app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => {
      dispatch(receiveUser());
    },
  };
};

const App = (props) => {
  //props.getUserInfo();
  const [isLoggedIn, setisLoggedIn] = useState(false);


  const autoLogin = () => {
    props.getUserInfo();
  };

  useEffect(() => {
    autoLogin();
  }, [])

  useEffect(() => {
    setisLoggedIn(props.state.isLoggedin)
  }, [props.state.isLoggedin]);

  return (
    <Fragment>
      {isLoggedIn ? <HomeConnected /> : <SignInConnected />}
    </Fragment>
  );
};

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
