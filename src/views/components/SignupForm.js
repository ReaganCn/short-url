import React from "react";

const SignupForm = (props) => {
  return (
    <form className="md:w-1/3 sign-up" onSubmit={props.onSubmit}>
      <p className="lg:text-2xl font-bold md:text-xl text-lg tracking-wide pb-2">
        Create an account
      </p>
      <div className="mb-3">
        <label className="block font-semibold font-md" name="firstname">
          First Name
        </label>
        <input
          type="text"
          className="border border-purple-300 border-opacity-75 rounded w-full h-8 p-2"
          onChange={props.onChange}
          name="firstname"
          value={props.input.firstname}
        />
      </div>
      <div className="mb-3">
        <label className="block font-semibold font-md" name="username">
          Username
        </label>
        <input
          type="text"
          className="border border-purple-300 border-opacity-75 rounded w-full h-8 p-2"
          onChange={props.onChange}
          name="username"
          value={props.input.username}
        ></input>
      </div>
      <div className="mb-3">
        <label className="block font-semibold font-md" name="password">
          Password
        </label>
        <input
          type="password"
          className="border border-purple-300 border-opacity-75 rounded w-full h-8 p-2"
          onChange={props.onChange}
          name="password"
          value={props.input.password}
        ></input>
      </div>
      <div className="mb-3">
        <label className="block font-semibold font-md">Confirm Password</label>
        <input
          type="password"
          className="border border-purple-300 border-opacity-75 rounded w-full h-8 p-2"
          onChange={props.onChange}
          name="confirmpassword"
          value={props.input.confirmpassword}
        ></input>
      </div>
      <button
        className="bg-purple-700 w-full p-2 text-white rounded mb-3 font-semibold text-sm items-center"
        type="submit"
      >

          <span
          style ={props.isFetching ? {display : "none"} : {display : "block"} }
          >Sign Up</span>
        
        <img
        style ={ props.isFetching ? {display : "block"} : {display : "none"}}
          className="w-6 h-6 inline m-auto"
          src="public/imgs/loading6.gif"
        />
      </button>
      <p className="mb-3 text-sm">
        Already have an account?{" "}
        <a href="" className="text-purple-700">
          {" "}
          Sign In
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
