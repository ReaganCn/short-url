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

const mapStateToProps = ({ shorten, app }) => {
  return {
    state: shorten,
    app: app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    shortenUrl: (data, user) => {
      dispatch(getShortUrl(data, user));
    },
    handleInput: (event) => {
      dispatch(handleChange(event));
    },
    getUserLinks: (username) => {
      dispatch(getLinks(username));
    },
    getCustomLink: (id, url, username) => {
      dispatch(customizeLink(id, url, username));
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

// React

const ShortContainer = (props) => {
  const [copyPopup, setcopyPopup] = useState(false);
  const [customize, setCustomize] = useState(false);

  //console.log(formatDate("2020-08-22T12:36:24.439Z"))
  useEffect(() => {
    if (props.app.user.length > 1) {
      props.getUserLinks(props.app.user);
    }
  }, [props.state.shorturl, props.state.custom]);

  useEffect(() => {
    evaluateShort();
  }, [props.state.custom]);

  const handleShorten = (event) => {
    setCustomize(false);
    const originalUrl = {
      url: props.state.url,
    };
    event.preventDefault();
    props.shortenUrl(originalUrl, props.app.user);
  };

  const handleClick = () => {
    document.getElementById("output").remove();
  };

  const handleCopyPopup = () => {
    setcopyPopup(true);
    setTimeout(() => {
      setcopyPopup(false);
    }, 3000);
  };
  const copyUrl = () => {
    copy(`link0.ga/${evaluateShort()}`);
    handleCopyPopup();
  };

  const copyHistoryLinks = (link, id) => {
    copy(`link0.ga/${link}`);
    props.updateHistoryCopy(id);
    setTimeout(() => {
      console.log("here");
      props.updateHistoryCopy(id);
    }, 3000);
  };
  const customizeHandler = () => {
    customize ? setCustomize(false) : setCustomize(true);
    if (customize) {
      //save the custom name to database
      props.getCustomLink(
        props.state.linkid,
        props.state.customurl,
        props.app.user
      );
    }
  };

  const evaluateShort = () => {
    if (props.state.custom === "") {
      return props.state.shorturl;
    }
    return props.state.custom;
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
      <div
        className="w-10/12 flex flex-col border rounded p-12 mx-auto shadow-2xl mt-8 border-transparent xl:mt-0"
        id="short-component"
      >
        <ShortComponent
          input={props.state}
          shorturl={evaluateShort()}
          onSubmit={() => handleShorten(event)}
          handleChange={() => props.handleInput(event)}
          handleClick={() => handleClick()}
          handleUrl={handleUrl(props.state.url, 30)}
          isFetching={props.state.isFetching}
          copyUrl={() => copyUrl()}
          copyPopup={copyPopup}
          customize={customize}
          customizeHandler={() => customizeHandler()}
        />
        <button id="history" className="px-10 md:w-3/12 xl:w-2/12 bg-black border-transparent text-white mx-auto h-12 flex justify-around mt-20 hover:bg-darkviolet md:mt-16 lg:mt-12">
          <span className="self-center font-opensans tracking-wide">History</span>&nbsp;&nbsp;&nbsp;
          <span className="self-center text-darkviolet arrow">
          <svg
            class="animate-bounce w-5 h-5 font-bold"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
           <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          </span>
        </button>
        {/* <span className="text-xl my-4">Your History</span> */}
        {historyLinks}
      </div>
    </Fragment>
  );
};

const ShortConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortContainer);
export { handleUrl };

export default ShortConnected;
