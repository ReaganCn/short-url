import React from "react";

const SignupForm = (props) => {
  return (
    <div className="w-11/12 flex flex-col mt-16 justify-center align-middle border rounded p-12 mx-auto">
    <div className="self-center">
        <form className="flex-row self-start" onSubmit={props.onSubmit}>
            <input type="text" name="url" id="original url" placeholder="Enter URL" className="border border-purple-400 outline-none p-1"/>
            <button className="border bg-purple-800 w-32 text-white p-1">Create</button>
        </form>
        <div className="flex-row self-start">
            <input type="text" name="shorturl" className="outline-none p-1" />
                <button className="border bg-purple-800 w-32 text-white p-1">Custom</button>
                <button className="border bg-purple-800 w-32 text-white p-1">Copy</button>
        </div>
    </div>
</div>
  );
};

export default SignupForm;
