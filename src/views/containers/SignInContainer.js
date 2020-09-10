import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import SignupForm from "../components/SignupForm";
import { authenticateUser } from "../../redux/login/actions";
import SigninForm from "../components/SigninForm";
import { handleChange, loginAction, receiveUser } from "../../redux/app/actions";

const mapStateToProps = ({ signin, app }) => {
  return {
    state: signin,
    app: app
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
    getUserInfo: ()=> {
      dispatch(receiveUser())
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

  const autoLogin = () => {
    
    props.getUserInfo();
   
  }
  
  useEffect(() => {
    autoLogin();
  }, [])
  
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
      fetch("https://reagan-urlshort.glitch.me/users/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials:'include',
        body: JSON.stringify(props.state),
      })
        .then((result) => result.json())
        .then((info) => {
          setisFetching(false);
        });
    }
    event.preventDefault();
  };

  const loginUser = (event) => {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://reagan-urlshort.glitch.me/users/authenticate";
    const data = {
      username: props.state.username,
      password: props.state.password,
    }; 
    setisFetching(true);
    fetch(url, {
      method: "POST",
      credentials:'include',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((doc) => {
        setisFetching(false);
        //props.autheticateAction(doc.authenticated);
        console.log(doc)
        doc.userName && props.loginAction(doc.userName);
      //  authenticate && props.getUserLinks(props.state.username)
      });


    event.preventDefault();
  };
// style={ props.app.isLoggedin ? {visibility : "collapse"}: {visibility : "visible"}}
  return (
    <Fragment>
      <div className="container w-3/4  border rounded-lg mx-auto mt-10 md:mt-20 shadow-2xl" >
        <div className="flex justify-center md:justify-start md:m-10">
          {signIn ? (
            <SigninForm
              input={props.state}
              onChange={() => props.handleChange(event)}
              toggleForm={() => toggleForm()}
              login={() => loginUser(event)}
              isFetching={isFetching}
              autoLogin = {props.app.isLogging}
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
    </Fragment>
  );
};

const SignInConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);

export default SignInConnected;
