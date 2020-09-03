import React from "react";

const HistoryComponent = (props) => {
  return (
    // <div
    //   id="history-component"
    //   className="flex w-11/12 justify-center flex-col m-2 mx-auto h-64"
    // >
    <div
      id="history-component"
      className="w-full md:w-8/12 border px-3 pt-2 text-white mx-auto bg-darkviolet mb-0 border-t-0 border-l-0 border-r-0 border-black"
     // style={props.showHistory? {display: "block", animation: "grow 1s linear"}:{display: "none"}}
    > 

<div className="flex flex-row justify-between self-start my-3 font-semibold ">
<small className="text-purple-200 font-bold"><i className="fa fa-calendar"></i> &nbsp;&nbsp;{props.date}</small>

<small className="text-purple-200 text-xs"> Expiry: {props.expiry  < 0 ? "expired" : props.expiry+" days"}</small>
   </div>
      <div className="flex flex-row justify-between self-start my-3 font-semibold ">

      
      <p className="font-semibold text-md">
          link0.ga/{props.shorturl}
        </p>

        <button onClick={props.copyOldShort} className="border font-bold my-0 p-1 rounded-full text-xs px-3 bg-white text-purple-600 border-darkviolet hover:text-white hover:bg-darkviolet hover:border-white md:px-6">
        {props.info.copied ? "Copied!" : "Copy"}
        </button>

        
      </div>

      <div className="flex flex-row justify-between mb-2 self-end">
      <a href="#" className="text-xs text-purple-200">
          {props.urlTrimmed}
        </a>
        

        
      </div>
    </div>
    // </div>
  );
};

export default HistoryComponent;
