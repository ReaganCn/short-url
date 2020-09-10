import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortConnected from "./ShortContainer";
import HomeComponent from "../components/HomeComponent";
import HistoryConnected from "./HistoryContainer";
import { logOutRequest } from "../../redux/app/actions";

const mapStateToProps = ({ app }) => {
  return {
    app: app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => {
      dispatch(logOutRequest())
    }
  };
};

const greetingsHandler = () => {
  const d = new Date();
  const time = d.getHours();
  if (time < 12) {
    return "Good Morning";
  } else if (time > 11 && time < 16) {
    return "Good Afternoon";
  } else if(time > 15) {
    return "Good Evening";
  }
};

const HomeContainer = (props) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);

 const accountMenuToggle = () => {
    showAccountMenu ? setShowAccountMenu(false) : setShowAccountMenu(true);
  };

  const accountSettingsToggle = () => {
    showAccountSettings ? setShowAccountSettings(false) : setShowAccountSettings(true);
  };

  return (
    <Fragment>
      <div
        style={{
          backgroundImage: "url('public/imgs/HeaderImageBlack.png')",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          height: "100vh",
        }}
        className=""
      >
        <HomeComponent
          info={props.app}
          greeting={greetingsHandler()}
          accountMenuToggle={() => accountMenuToggle()}
          showAccountSettings={showAccountSettings}
          accountSettingsToggle={()=> accountSettingsToggle()}
          showAccountMenu={showAccountMenu}
          logOut = {()=>props.logOutUser()}
        />
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
