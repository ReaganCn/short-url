import React from "react";

const ShortComponent = (props) => {
  return (
    <div
      className="w-9/12 flex flex-col mt-16 border rounded p-12 mx-auto shadow-2xl"
      id="short-component"
    >
      <div className="">
        <form
          className=" flex flex-row self-start h-10 justify-between"
          onSubmit={props.onSubmit}
        >
          <input
            type="text"
            name="url"
            id="original url"
            placeholder="Enter URL"
            className="h-full border border-purple-400 border-t-0 border-r-0 border-l-0 outline-none p-1 w-10/12"
            onChange={props.handleChange}
            value={props.input.url}
          />
          <button
            className=" h-full border bg-purple-700 w-2/12 text-white p-1 rounded"
            type="submit"
            // onClick={props.handleClick}
          >
            Create
          </button>
        </form>
        <div
          className="flex-row self-start"
          id="output"
          style={
            props.input.shorturl === ""
              ? { visibility: "collapse" }
              : { visibility: "visible" }
          }
        >
          <div className="flex flex-col md:flex-row justify-between border mb-1 border-purple-200 rounded pl-2 md:p-0 mt-3">
            <p className="md:self-center md:ml-2 text-sm text-gray-700">
              {props.handleUrl}
            </p>
            <a
              className="md:self-center font-semibold text-blue-600"
              href={`http://link0.ga/${props.input.shorturl}`}
              target="_blank"
            >
              link0.ga/{props.input.shorturl}
            </a>
            <div>
              <button className="w-32 text-purple-600 p-1 h-10  font-bold my-0">
                Copy
              </button>
              <button className="w-32 text-purple-600 p-1 h-10  font-bold rounded rounded-l-none">
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortComponent;
