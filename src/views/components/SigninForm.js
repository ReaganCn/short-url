import React from "react";

const SigninForm = () => {
return (
    <form action="" className="md:w-1/3 self-center sign-in">
    <p className="lg:text-2xl font-bold md:text-xl text-lg tracking-wide pb-2">Sign in to your account</p>

    <div className="mb-3">
        <label className="block font-semibold font-md" name="username">Username</label>
        <input type="text" className="border border-purple-300 border-opacity-75 rounded w-full h-8 p-2"></input>
    </div>
    <div className="mb-3">
        <label className="block font-semibold font-md" name="password">Password</label>
        <input type="password" className="border border-purple-300 border-opacity-75 rounded w-full h-8 p-2"></input>
    </div>
        <button className="bg-purple-700 w-full p-2 text-white rounded mb-3 font-semibold text-sm" type="submit">Sign Up</button>
        <p className="mb-3 text-sm">No account? <a href="" className="text-purple-700"> Sign Up</a></p>
</form>
)
}

export default SigninForm;