import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortComponent from "../components/ShortComponent";
import { getShortUrl } from "../../redux/short/actions";
import { handleChange, getLinks } from "../../redux/app/actions";
import HistoryComponent from "../components/HistoryComponent";

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
  // console.log(props.app.username)
  useEffect(() => {
    if (props.app.user.length > 1) {
      props.getUserLinks(props.app.user);
    }
  }, [props.state.shorturl]);

  const handleShorten = (event) => {
    const originalUrl = {
      url: props.state.url,
    };
    event.preventDefault();
    props.shortenUrl(originalUrl, props.app.user);
  };

  const handleClick = () => {
    document.getElementById("output").remove();
  };

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
          onSubmit={() => handleShorten(event)}
          handleChange={() => props.handleInput(event)}
          handleClick={() => handleClick()}
          handleUrl={handleUrl(props.state.url, 35)}
          isFetching={props.state.isFetching}
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
