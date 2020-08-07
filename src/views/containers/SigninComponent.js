import React, { Fragment } from "react";


import SignupForm from "../components/SignupForm";

const SignInContainer = () => {
  return (
    <Fragment>
      <div className="container w-3/4  border rounded-lg mx-auto mt-10 md:mt-20 shadow-xl">
        <div className="flex justify-center md:justify-start md:m-10">
            <SignupForm />
        </div>
      </div>
    </Fragment>
  );
};

export default SignInContainer;
