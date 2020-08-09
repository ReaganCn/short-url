import React from "react";

const SigninForm = (props) => {
  return (
    <form action="" className="md:w-1/3 self-center sign-in">
      <p className="lg:text-2xl font-bold md:text-xl text-lg tracking-wide pb-2">
        Sign in to your account
      </p>

      <div className="mb-3">
        <label className="block font-semibold font-md" name="username">
          Username
        </label>
        <input
          type="text"
          className="border border-purple-300 border-opacity-75 outline-none focus:border-purple-400 rounded w-full h-8 p-2"
          onChange={props.onChange}
          value={props.input.username}
          name="username"
        />
      </div>
      <div className="mb-3">
        <label className="block font-semibold font-md" name="password">
          Password
        </label>
        <input
          type="password"
          className="border border-purple-300 border-opacity-75 outline-none focus:border-purple-400 rounded w-full h-8 p-2"
          value={props.input.password}
          onChange={props.onChange}
          name="password"
        ></input>
      </div>
      <button
        className="bg-purple-700 w-full p-2 text-white rounded mb-3 font-semibold text-sm hover:bg-purple-800 outline-none"
        type="submit"
      >
        Sign In
      </button>
      <p className="mb-3 text-sm">
        Don't have an account?{" "}
        <a
          onClick={props.toggleForm}
          className="text-purple-700 cursor-pointer hover:text-purple-900"
        >
          {" "}
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default SigninForm;
