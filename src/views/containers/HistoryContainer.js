import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortComponent from "../components/ShortComponent";
import { getShortUrl, customizeLink } from "../../redux/short/actions";
import {
  handleChange,
  getLinks,
  updateCopyLinks,
} from "../../redux/app/actions";
import HistoryComponent from "../components/HistoryComponent";
import copy from "copy-to-clipboard";


//---------------REDUX-------------------------

const mapStateToProps = ({ shorten, app }) => {
  return {
    state: shorten,
    app: app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserLinks: (username) => {
      dispatch(getLinks(username));
    },
    updateHistoryCopy: (id) => {
      dispatch(updateCopyLinks(id));
    },
  };
};

//helper functions

const handleUrl = (url, limit) => {
  if (url.length > limit) {
    return url.slice(0, limit) + "...";
  }
  return url;
};

const formatDate = (date) => {
  const newDate = new Date(date);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return months[newDate.getMonth()] + " " + newDate.getDate();
};

//---------------REACT-------------------------

const HistoryContainer = (props) => {
  const [copyPopup, setcopyPopup] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (props.app.user.length > 1) {
      props.getUserLinks(props.app.user);
    }
  }, [props.state.shorturl, props.state.custom]);


  const copyHistoryLinks = (link, id) => {
    copy(`link0.ga/${link}`);
    props.updateHistoryCopy(id);
    setTimeout(() => {
      console.log("here");
      props.updateHistoryCopy(id);
    }, 3000);
  };

  const historyButton = () => {
    showHistory ? setShowHistory(false) : setShowHistory(true);
  };

  const historyLinks = props.app.previousLinks.slice(0, 5).map((item) => {
    const getShort = (custom) => (custom ? item.custom : item.shorturl);
    return (
      <HistoryComponent
        key={item._id}
        info={item}
        date={formatDate(item.dateCreated)}
        copyOldShort={() => copyHistoryLinks(getShort(item.custom), item._id)}
        shorturl={getShort(item.custom)}
        urlTrimmed={handleUrl(item.originalurl, 35)}
        copyPopup={copyPopup}
        expiry={Math.round(item.expiresIn)}
      />
    );
  });

  return (
    <Fragment>

        <button
          id="history"
          onClick = {() => historyButton()}
          className="px-10 md:w-2/12 bg-black border border-darkviolet text-white mx-auto h-12 flex justify-around mt-20 hover:bg-darkviolet md:mt-16 lg:mt-12 mb-8"
        >
          <span className="self-center font-opensans tracking-wide">
            History
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className="self-center text-darkviolet arrow">
            <svg
              className={`w-5 h-5 font-bold ${showHistory ? "" : "animate-bounce"}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </span>
        </button>
        {/* <span className="text-xl my-4">Your History</span> */}
        <div 
        id="historyWrapper"
        style={showHistory? {display: "block", animation: "fadein 1s linear"}:{display: "none"}}
        className="w-11/12 md:w-10/12 mx-auto">
        {historyLinks}
        </div>
  
    </Fragment>
  );
};

//---------------REACT-REDUX-------------------------
const HistoryConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryContainer);

export default HistoryConnected;
