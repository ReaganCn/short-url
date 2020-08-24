import React from "react";

const HistoryComponent = (props) => {
  return (
    // <div
    //   id="history-component"
    //   className="flex w-11/12 justify-center flex-col m-2 mx-auto h-64"
    // >
    <div
      id="history-component"
      className="w-11/12 border border-gray-400 px-3 pt-2 shadow-lg rounded text-white bg-purple-700 mx-auto"
    > 
      <div className="flex flex-row justify-between self-start mb-3 font-semibold">
        <small className="text-purple-200">{props.date}</small>

  <small className="text-purple-200">Expiry: {props.expiry} days</small>
      </div>

      <div className="flex flex-row justify-between mb-2 self-end">
      <p className="font-semibold text-md self-end">
          link0.ga/{props.shorturl}
        </p>
        <a href="#" className="text-xs self-end">
          {props.urlTrimmed}
        </a>

        <button onClick={props.copyOldShort} className="border border-purple-700 font-bold my-0 self-end p-1 rounded-full text-xs px-3 bg-white text-purple-600 hover:text-white hover:bg-purple-600">
        {props.info.copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
    // </div>
  );
};

export default HistoryComponent;
