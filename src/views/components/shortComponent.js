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
          className="h-8 md:h-full border border-purple-400 border-t-0 border-r-0 border-l-0 outline-none p-1 w-10/12 text-sm bg-white appearance-none pl-2"
          onChange={props.handleChange}
          value={props.input.url}
        />
        <button
          className="text-xs md:text-base md:h-full border w-3/12 md:w-2/12 text-white p-1 rounded border-transparent ml-5 bg-darkviolet hover:bg-black hover:border-darkviolet h-8"
          type="submit"
          // onClick={props.handleClick}
        >
          <span
            style={
              props.isFetching ? { display: "none" } : { display: "block" }
            }
            className="font-opensans md:tracking-wide"
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
      {/* ------------------------------- OUTPUT --------------------------------- */}
      <div
        className="flex-row self-start my-6"
        id="output"
        style={
          props.input.shorturl === ""
            ? { visibility: "collapse", position: "absolute" }
            : { visibility: "visible", animation: "grow 0.2s linear" }
        }
      >
        <div className="flex flex-col md:flex-row justify-between border mb-1 border-purple-200 pl-2 md:p-0 mt-3 border-r-0 border-l-0 py-3">
          <p className="md:self-center md:ml-2 text-sm text-white font-semibold md:block hidden">
            <i className="fa fa-globe pr-2 text-purple-400"></i>
            {props.handleUrl}
          </p>
          {/* -------------------- Customize link section  ------------------------- */}
          {props.customize ? (
            <div
              id="customize-box "
              className="md:self-center font-semibold text-blue-300 md:text-lg mx-auto"
            >
              <span>shrtly.ga/</span>
              <input
                type="text"
                name="customurl"
                autoComplete="off"
                onChange={props.handleChange}
                value={props.input.customurl}
                className="bg-white border border-purple-300 opacity-75 rounded outline-none p-1 font-semibold text-black w-24 h-6 md:h-6"
              />
            </div>
          ) : (
            <a
              className="md:self-center font-semibold text-blue-300 hover:underline md:text-lg mx-auto"
              href={`https://shrtly.ga/${props.shorturl}`}
              target="_blank"
            >
              shrtly.ga/{props.shorturl}
            </a>
          )}
          <div className="flex md:flex-row flex-row justify-between my-1 md:my-0">
            <button
              className="md:w-32 text-purple-400 p-1 h-10 my-0 outline-none font-semibold hover:text-purple-200"
              onClick={props.copyUrl}
            >
              {props.copyPopup ? (
                "Copied!"
              ) : (
                <span>
                  <i className="fa fa-files-o"></i> Copy
                </span>
              )}
            </button>
            <button
              className="md:w-32 text-purple-400 p-1 h-10  font-semibold rounded rounded-l-none hover:text-purple-200"
              onClick={props.customizeHandler}
            >
              {props.customize ? (
                <span className="font-bold tracking-wide">
                  <i className="fa fa-floppy-o"></i> Save?
                </span>
              ) : (
                <span>
                  <i className="fa fa-pencil"></i> Customize
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortComponent;
