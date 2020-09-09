import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortConnected from "./ShortContainer";
import HomeComponent from "../components/HomeComponent";
import HistoryConnected from "./HistoryContainer";

const mapStateToProps = ({ app }) => {
  return {
    app: app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const greetingsHandler = () => {
  const d = new Date();
  const time = d.getHours();
  if (time < 12) {
    return "Good Morning";
  } else if (time > 12 && time < 16) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const HomeContainer = (props) => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: "url('public/imgs/HeaderImageBlack.png')",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          height: "100vh"
        }}
        className=""
      >
        <HomeComponent info={props.app}  greeting ={greetingsHandler()}/>
        <ShortConnected />
        <div className="flex flex-col bg-black mx-auto">
        <HistoryConnected />
        </div>
        
      </div>
    </Fragment>
  );
};

const HomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

export default HomeConnected;
