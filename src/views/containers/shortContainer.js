import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortComponent from "../components/ShortComponent";
import { getShortUrl } from "../../redux/short/actions";
import { handleChange } from "../../redux/app/actions";

const mapStateToProps = ({ shorten }) => {
  return {
    state: shorten,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    shortenUrl: (data) => {
      dispatch(getShortUrl(data));
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
    props.shortenUrl(originalUrl);
  };

  const handleClick = () => {
    document.getElementById("output").remove()
  }
  return (
    <Fragment>
      <ShortComponent
        input={props.state}
        onSubmit={() => handleShorten(event)}
        handleChange={() => props.handleInput(event)}
        handleClick ={()=> handleClick()}
        handleUrl = {handleUrl(props.state.url)}
        isFetching = {props.state.isFetching}
      />
    </Fragment>
  );
};

const ShortConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortContainer);

export default ShortConnected;
