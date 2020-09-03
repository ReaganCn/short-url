import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortConnected from "./ShortContainer";
import HomeComponent from "../components/HomeComponent";


const mapStateToProps = ({  }) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

const HomeContainer = (props) => {


  return (
    <Fragment>
      <div style={{backgroundImage: "url('public/imgs/HeaderImage.png')", backgroundRepeat: "no-repeat"}} className="">
      <HomeComponent />
      <div className="flex" style={{backgroundColor: "black"}}>
      <ShortConnected />
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
