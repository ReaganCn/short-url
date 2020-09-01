import React from "react";

const ShortComponent = (props) => {
  return (
    <div className="">
      <form
        className=" flex flex-row self-start h-10 justify-between"
        onSubmit={props.onSubmit}
      >
        <input
          type="text"
          name="url"
          id="original url"
          placeholder="Shorten your link..."
          className="h-full border border-purple-400 border-t-0 border-r-0 border-l-0 outline-none p-1 w-10/12 text-sm bg-white appearance-none pl-2"
          onChange={props.handleChange}
          value={props.input.url}
        />
        <button
          className=" h-full border w-2/12 text-white p-1 rounded border-transparent ml-5 bg-darkviolet"
          type="submit"
          // onClick={props.handleClick}
        >
          <span
            style={
              props.isFetching ? { display: "none" } : { display: "block" }
            }
          className="font-opensans  tracking-wide"
          >
            Create
          </span>

          <img
            style={
              props.isFetching ? { display: "block" } : { display: "none" }
            }
            className="w-6 h-6 inline m-auto"
            id="loader"
            src="public/imgs/customloader-white.png"
          />
        </button>
      </form>
      <div
        className="flex-row self-start mt-12"
        id="output"
        style={
          props.input.shorturl === ""
            ? { visibility: "collapse", position: "absolute" }
            : { visibility: "visible", animation: "grow 0.2s linear" }
        }
      >
        <div className="flex flex-col md:flex-row justify-between border mb-1 border-purple-200 rounded pl-2 md:p-0 mt-3">
          <p className="md:self-center md:ml-2 text-sm text-gray-700 italic">
            {props.handleUrl}
          </p>

          {/* Customize link section */}
          {props.customize ? (
            <div
              id="customize-box "
              className="md:self-center font-semibold text-blue-700 "
            >
              <span>link0.ga/</span>
              <input
                type="text"
                name="customurl"
                autoComplete="off"
                onChange={props.handleChange}
                value={props.input.customurl}
                className="bg-white border border-purple-300 opacity-75 rounded-md outline-none p-1 text-sm font-semibold text-black w-24"
              />
            </div>
          ) : (
            <a
              className="md:self-center font-semibold text-blue-700"
              href={`http://link0.ga/${props.shorturl}`}
              target="_blank"
            >
              link0.ga/{props.shorturl}
            </a>
          )}
          <div>
            <button
              className="w-32 text-purple-600 p-1 h-10 my-0 outline-none font-semibold"
              onClick={props.copyUrl}
            >
              {props.copyPopup ? "Copied!" : "Copy"}
            </button>
            <button
              className="w-32 text-purple-600 p-1 h-10  font-semibold rounded rounded-l-none"
              onClick={props.customizeHandler}
              style={
                props.customize
                  ? { animation: "zoom 2s linear infinite" }
                  : { visibility: "inherit" }
              }
            >
              {props.customize ? "Save?" : "Customize"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortComponent;
