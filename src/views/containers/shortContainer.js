import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortComponent from "../components/ShortComponent";
import { getShortUrl, customizeLink } from "../../redux/short/actions";
import { handleChange, getLinks } from "../../redux/app/actions";
import HistoryComponent from "../components/HistoryComponent";
import copy from "copy-to-clipboard"

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
    }
  };
};

const handleUrl = (url, limit) => {
  if (url.length > limit) {
    return url.slice(0, limit) + "...";
  }
  return url;
};


// React

const ShortContainer = (props) => {
  const [copyPopup, setcopyPopup] = useState(false);
  const [customize, setCustomize] = useState(false);

  useEffect(() => {
    if (props.app.user.length > 1) {
      props.getUserLinks(props.app.user);
    }
  }, [props.state.shorturl]);

  useEffect(() => {
    evaluateShort();
  }, [props.state.custom])

  const handleShorten = (event) => {
    setCustomize(false)
    const originalUrl = {
      url: props.state.url,
    };
    event.preventDefault();
    props.shortenUrl(originalUrl, props.app.user);
  };

  const handleClick = () => {
    document.getElementById("output").remove();
  };

  const copyUrl = () => {
    copy(`link0.ga/${evaluateShort()}`);
    setcopyPopup(true);
    setTimeout(()=> {
        setcopyPopup(false);
    },3000)
  }

  const customizeHandler = () => {
    customize ? setCustomize(false) : setCustomize(true);
    if (customize){
     //save the custom name to database
     props.getCustomLink(props.state.linkid,props.state.customurl, props.app.user);
    }
  }

  const evaluateShort = () => {
    if(props.state.custom === ""){
      return props.state.shorturl;
    }
    return props.state.custom
  }

  const historyLinks = props.app.previousLinks.slice(0, 5).map((item) => {
    return (
      <HistoryComponent
        key={item._id}
        info={item}
        urlTrimmed={handleUrl(item.originalurl, 35)}
      />
    );
  });

  return (
    <Fragment>
      <div
        className="w-7/12 flex flex-col mt-16 border rounded p-12 mx-auto shadow-2xl"
        id="short-component"
      >
        <ShortComponent
          input={props.state}
          shorturl = {evaluateShort()}
          onSubmit={() => handleShorten(event)}
          handleChange={() => props.handleInput(event)}
          handleClick={() => handleClick()}
          handleUrl={handleUrl(props.state.url, 30)}
          isFetching={props.state.isFetching}
          copyUrl = {()=> copyUrl()}
          copyPopup ={copyPopup}
          customize ={customize}
          customizeHandler ={()=> customizeHandler()}
        />
        <span className="text-xl my-4">Your History</span>
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
