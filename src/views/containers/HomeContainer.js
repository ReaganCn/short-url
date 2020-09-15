import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortConnected from "./ShortContainer";
import HomeComponent from "../components/HomeComponent";
import HistoryConnected from "./HistoryContainer";
import {
  logOutRequest,
  updateDetailsRequest,
  handleChange,
  resetAlertAction
} from "../../redux/app/actions";

const mapStateToProps = ({ app }) => {
  return {
    app: app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => {
      dispatch(logOutRequest());
    },
    updateRequest: (data) => {
      dispatch(updateDetailsRequest(data));
    },
    handleChange: (event) => {
      dispatch(handleChange(event));
    },
    resetAlert: () => {
      dispatch(resetAlertAction())
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
  } else if (time > 15) {
    return "Good Evening";
  }
};

const HomeContainer = (props) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [samePassword, setsamePassword] = useState(false);
  const [validInfo, setvalidInfo] = useState(false);
  const [restrictDemo, setrestrictDemo] = useState(false);
  //const [confirmPassword, setconfirmPassword] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(()=> {
    if(props.app.user === "demo1") {
      setrestrictDemo(true)
    }
  }, [])

  useEffect(() => {
    if (props.app.newPassword === props.app.confirmPassword) {
      setsamePassword(true);
    } else {
      setsamePassword(false);
    }
  }, [props.app.confirmPassword]);

  const accountMenuToggle = () => {
    showAccountMenu ? setShowAccountMenu(false) : setShowAccountMenu(true);
  };

  const accountSettingsToggle = () => {
    showAccountSettings
      ? setShowAccountSettings(false)
      : setShowAccountSettings(true);
  };

  const updateInfo = (event) => {
      if (samePassword && props.app.newPassword.length > 2) {
        setvalidInfo(true);
      } else if (props.app.newFirstName.length > 4) {
        setvalidInfo(true);
      }

      if (validInfo) {
        const info = {
          firstname: props.app.newFirstName,
          password: props.app.newPassword,
          username: props.app.user,
        };
       props.updateRequest(info);
      }
    event.preventDefault();
  };

  return (
    <Fragment>
      <div
        style={{
          backgroundImage: "url('public/imgs/HeaderImageBlack.png')",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
        }}
        className="h-screen"
      >
        <HomeComponent
          info={props.app}
          greeting={greetingsHandler()}
          accountMenuToggle={() => accountMenuToggle()}
          showAccountSettings={showAccountSettings}
          accountSettingsToggle={() => accountSettingsToggle()}
          showAccountMenu={showAccountMenu}
          logOut={() => props.logOutUser()}
          handleChange={() => props.handleChange(event)}
          samePassword={samePassword}
          updateInfo={() => updateInfo(event)}
          isFetching={props.app.isFetchingUpdate}
          restrictDemo = {restrictDemo}
          resetAlert = {()=> props.resetAlert()}
        />
        <ShortConnected />
        <div className="flex flex-col bg-black mx-auto">
          <HistoryConnected />
        </div>
        <div className="w-full bg-black py-8">
        <div id="wrapper" className="mx-auto w-10/12 flex flex-col bg-black md:pt-8">
        <div id="icons" className="flex flex-row justify-between">
          <div className="image-and-text text-white flex self-center flex-col">
            <img
              width="30px"
              height="30px"
              src="public/imgs/internet-white.png"
              style={{animation: "fadein 1.5s linear"}}
              className="self-center"
            /><span className="text my-2 text-center md:text-sm text-xs text-white" style={{animation: "fadein 1s linear"}}>Any URL</span>
          </div>
    
          <div className="image-and-text ml-16 flex self-center flex-col">
            <img
              width="30px"
              height="30px"
              src="public/imgs/hammer-white-purple.png"
              style={{animation: "fadein 1.5s linear 0.4s"}}
              className="self-center"
            /><span className="text my-2 text-center md:text-sm text-xs text-white" style={{animation: "fadein 1s linear 0.4s"}}>Shorten and customize.</span>
          </div>
          
          <div className="image-and-text flex self-center flex-col">
            <img
              width="30px"
              height="30px"
              src="public/imgs/check-mark-purple.png"
              style={{animation: "fadein 1.5s linear 0.8s"}}
              className="self-center"
            /><span className="text my-2 text-center md:text-sm text-xs text-white" style={{animation: "fadein 1s linear 0.8s"}}>Use it anywhere</span>
          </div>
        </div>
      </div>
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
