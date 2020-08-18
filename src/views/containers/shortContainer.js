import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortComponent from "../components/ShortComponent";
import { getShortUrl } from "../../redux/short/actions";
import { handleChange } from "../../redux/app/actions";
import HistoryComponent from "../components/HistoryComponent";

const mapStateToProps = ({ shorten, app }) => {
  return {
    state: shorten,
    app: app
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
  };
};

const ShortContainer = (props) => {

const handleUrl = (url) => {
  const limit = 35;
  if (url.length > limit){
    return url.slice(0, limit) + "..."
  }
  return url;
}

  const handleShorten = (event) => {
    const originalUrl = {
      url: props.state.url,
    };
    event.preventDefault();
    props.shortenUrl(originalUrl, props.app.user);
  };

  const handleClick = () => {
    document.getElementById("output").remove()
  }

  const historyLinks = props.app.previousLinks.map(item => {
return <HistoryComponent 


/>
  })


  return (
    <Fragment>
          <div
      className="w-9/12 flex flex-col mt-16 border rounded p-12 mx-auto shadow-2xl"
      id="short-component"
      
    >
      <ShortComponent
        input={props.state}
        onSubmit={() => handleShorten(event)}
        handleChange={() => props.handleInput(event)}
        handleClick ={()=> handleClick()}
        handleUrl = {handleUrl(props.state.url)}
        isFetching = {props.state.isFetching}
      />
      <HistoryComponent />
    </div>
      
    </Fragment>
  );
};

const ShortConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortContainer);

export default ShortConnected;
