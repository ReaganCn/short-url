import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

import SignupForm from "../components/SignupForm";
import { handleChange, postingDetails } from "../../redux/login/actions";
import SigninForm from "../components/SigninForm";

const mapStateToProps = ({ signin }) => {
  return {
    state: signin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      dispatch(handleChange(event));
    },
    submitDetails: (data) => {
      dispatch(postingDetails(data));
    },
  };
};

const SignInContainer = (props) => {
  const [isFetching, setisFetching] = useState(false);
  const [signIn, setsignIn] = useState(true);

  const toggleForm = () => {
    signIn ? setsignIn(false) : setsignIn(true);
  };

  const handleSubmit = (event) => {
    setisFetching(true);
    // console.log(JSON.stringify(props.state))
    fetch("https://reagan-urlshort.glitch.me/users/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(props.state),
    })
      .then((result) => result.json())
      .then((info) => {
        console.log(info);
        setisFetching(false);
      });
    event.preventDefault();
  };

  return (
    <Fragment>
      <div className="container w-3/4  border rounded-lg mx-auto mt-10 md:mt-20 shadow-2xl">
        <div className="flex justify-center md:justify-start md:m-10">
          {signIn ? (
            <SigninForm 
            toggleForm = {() => toggleForm()}
            />
          ) : (
            <SignupForm
              input={props.state}
              onChange={() => props.handleChange(event)}
              onSubmit={() => handleSubmit(event)}
              isFetching={isFetching}
              toggleForm = {() => toggleForm()}
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
