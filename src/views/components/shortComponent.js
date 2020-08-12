import React from "react";

const ShortComponent = (props) => {
  return (
    <div className="w-11/12 flex flex-col mt-16 justify-center align-middle border rounded p-12 mx-auto">
      <div className="self-center">
        <form className="flex-row self-start" onSubmit={props.onSubmit}>
          <input
            type="text"
            name="url"
            id="original url"
            placeholder="Enter URL"
            className="border border-purple-400 outline-none p-1"
            onChange={props.handleChange}
            value={props.input.url}
          />
          <button className="border bg-purple-800 w-32 text-white p-1" type="submit">
            Create
          </button>
        </form>
        <div className="flex-row self-start">
          <p
            type="text"
            name="shorturl"
            className="outline-none p-1 text-black"
           
          >Your new link: {props.input.shorturl}</p>
          <button className="border bg-purple-800 w-32 text-white p-1">
            Custom
          </button>
          <button className="border bg-purple-800 w-32 text-white p-1">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortComponent;
