import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import SignupForm from "../components/SignupForm";
import { authenticateUser, loginDemoAction, resetLoginsAction } from "../../redux/login/actions";
import SigninForm from "../components/SigninForm";
import {
  handleChange,
  loginAction,
  receiveUser,
} from "../../redux/app/actions";

const mapStateToProps = ({ signin, app }) => {
  return {
    state: signin,
    app: app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      dispatch(handleChange(event));
    },
    autheticateAction: (value) => {
      dispatch(authenticateUser(value));
    },
    loginAction: (user) => {
      dispatch(loginAction(user));
    },
    getUserInfo: () => {
      dispatch(receiveUser());
    },
    loginDemoAcc: () => {
      dispatch(loginDemoAction());
    },
    resetLogins: () => {
      dispatch(resetLoginsAction())
    }
    // getUserLinks: (username) => {
    //   dispatch(getLinks(username));
    // }
  };
};

const SignInContainer = (props) => {
  const [isFetching, setisFetching] = useState(false);
  const [signIn, setsignIn] = useState(true);
  const [samePassword, setsamePassword] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [alertMessage, setalertMessage] = useState({});

  const invalidLogin = {
    title: "Authentication Failed",
    message: "Invalid username or password",
  };

  const failedRegisterPassword = {
    title: "Registration Failed",
    message: "Password Missmatch",
  };

  const failedRegisterUsername = {
    title: "Registration Failed",
    message: "Username already taken",
  };

  const alertHandler = (title, msg) => {
    return {
      title: title,
      message: msg,
    };
  };

  useEffect(() => {
    if (props.state.password === props.state.confirmpassword) {
      setsamePassword(true);
    } else {
      setsamePassword(false);
    }
  }, [props.state.confirmpassword]);

  const toggleForm = () => {
    signIn ? setsignIn(false) : setsignIn(true);
  };

  const handleSubmit = (event) => {
    if (samePassword && props.state.password.length > 1) {
      setisFetching(true);
      // console.log(JSON.stringify(props.state))
      fetch("https://www.shrtly.ga/users/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(props.state),
      })
        .then((result) => result.json())
        .then((info) => {
          setisFetching(false);
          if (info.user) {
            setshowAlert(true);
            setalertMessage(alertHandler("Registration Successfull", ""));
          } else {
            setshowAlert(true);
            setalertMessage(alertHandler("Registration Failed", info.err));
          }
        });
    } else {
      setshowAlert(true);
      setalertMessage(
        alertHandler("Registration Failed", "Password Missmatch")
      );
    }
    event.preventDefault();
  };

  const loginUser = (event) => {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.shrtly.ga/users/authenticate";

    const data = {
      username: props.state.username,
      password: props.state.password,
    };
    setisFetching(true);
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((doc) => {
        setisFetching(false);
        doc.userName && props.loginAction(doc);
        !doc.authenticated && setshowAlert(true);
        !doc.authenticated && setalertMessage(invalidLogin);
      });

    event.preventDefault();
  };

  useEffect(() => {
    if (props.state.username === "demo1") {
      loginUser(event);
    }
    return () => {
      if (props.state.username === "demo1") {
        props.resetLogins()
      }
    }
  }, [props.state.username])
  const loginDemo = (event) => {
    props.loginDemoAcc();
  };
  // style={ props.app.isLoggedin ? {visibility : "collapse"}: {visibility : "visible"}}
  return (
    <Fragment>
      <div className="w-full h-full">
        <div id="logo" className="md:w-2/12 mx-auto flex items-end w-6/12">
          <img src="public/imgs/logo.png" className="inline-block w-12/12" />
          <img
            id="logo-dot"
            src="public/imgs/logo-dot.png"
            // style={{ width: "25px", height: "25px" }}
            className="w-3 h-3 mb-6"
          />
        </div>
        <div className="text-center flex flex-col">
          <span className="font-opensans md:text-2xl font-semibold text-sm">
            Get short and customized links in an instant
          </span>
          <span
            className="font-opensans md:text-xs font-semibold my-1 text-darkviolet cursor-pointer hover:text-purple-600 text-xs"
            onClick={() => loginDemo(event)}
          >
            Don't want create an account? Click here to sign in with the demo
            account.
          </span>
        </div>
        <div className="w-11/12 container md:w-3/4  border rounded-lg mx-auto md:mt-10 shadow-2xl p-3 mt-12 md:p-0">
          <div
            style={showAlert ? { display: "block" } : { display: "none" }}
            className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 text-sm font-opensans"
            role="alert"
          >
            <p className="font-bold">{alertMessage.title}</p>
            <p>{alertMessage.message}</p>
          </div>
          <div className="flex justify-center md:justify-start md:m-10">
            {signIn ? (
              <SigninForm
                input={props.state}
                onChange={() => props.handleChange(event)}
                toggleForm={() => toggleForm()}
                login={() => loginUser(event)}
                isFetching={isFetching}
                autoLogin={props.app.isLogging}
              />
            ) : (
              <SignupForm
                input={props.state}
                onChange={() => props.handleChange(event)}
                onSubmit={() => handleSubmit(event)}
                isFetching={isFetching}
                toggleForm={() => toggleForm()}
                samePassword={samePassword}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const SignInConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);

export default SignInConnected;
