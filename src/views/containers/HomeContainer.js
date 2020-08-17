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
      <HomeComponent />
      <ShortConnected />
    </Fragment>
  );
};

const HomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

export default HomeConnected;
