import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortComponent from "../components/ShortComponent";
import { getShortUrl, customizeLink } from "../../redux/short/actions";
import {
  handleChange,
  getLinks,
  updateCopyLinks,
  setAlertAction, resetAlertAction
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
    sendAlert: (message) => {
      dispatch(setAlertAction(message))
    },
    resetAlert: () => {
      dispatch(resetAlertAction())
    }
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

const ShortContainer = (props) => {
  const [copyPopup, setcopyPopup] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  //console.log(formatDate("2020-08-22T12:36:24.439Z"))

  useEffect(() => {
    evaluateShort();
  }, [props.state.custom]);

  const handleShorten = (event) => {
    setCustomize(false);
    const originalUrl = {
      url: props.state.url,
    };
    event.preventDefault();
    if(props.state.url !== ""){
      props.shortenUrl(originalUrl, props.app.user);
    } else {
      props.sendAlert("Please input a valid link e.g. www.google.com")
      setTimeout(()=> {
      props.resetAlert()
      }, 4000)
    }
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


  return (
    <Fragment>
      <div
        className="w-full md:w-10/12 flex flex-col border rounded p-12 mx-auto mt-20 border-transparent md:mt-5 -mb-16"
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
        
      </div>
    </Fragment>
  );
};

//---------------REACT-REDUX-------------------------
const ShortConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortContainer);
export { handleUrl };

export default ShortConnected;
