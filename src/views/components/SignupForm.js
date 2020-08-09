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
          className="border border-purple-300 border-opacity-75 outline-none focus:border-purple-400 rounded w-full h-8 p-2"
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
          className="border border-purple-300 border-opacity-75 outline-none focus:border-purple-400 rounded w-full h-8 p-2"
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
          className="border border-purple-300 border-opacity-75 outline-none focus:border-purple-400 rounded w-full h-8 p-2"
          onChange={props.onChange}
          name="password"
          value={props.input.password}
        ></input>
      </div>
      <div className="mb-3 w-full">
        <label className="block font-semibold font-md">Confirm Password</label>
        <input
          type="password"
          className= {`border border-purple-300 border-opacity-75 w-5/6 outline-none rounded h-8 p-2${props.samePassword ? " focus:border-purple-500 " : " focus:border-red-500"}`}
          onChange={props.onChange}
          name="confirmpassword"
          value={props.input.confirmpassword}
  ></input><span className="inline-block text-red-700 font-bold" style={props.samePassword ? { visibility: "collapse"} : { visibility: "visible"}}>&nbsp;&nbsp;&nbsp;x</span>
      </div>
      <button
        className="bg-purple-700 w-full p-2 text-white outline-none rounded mb-3 font-semibold text-sm items-center hover:bg-purple-800"
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
        Already have an account?&nbsp;
        <a onClick={props.toggleForm} className="text-purple-700 cursor-pointer hover:text-purple-900">
           Sign In
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
