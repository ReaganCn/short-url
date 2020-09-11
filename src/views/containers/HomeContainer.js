import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import ShortConnected from "./ShortContainer";
import HomeComponent from "../components/HomeComponent";
import HistoryConnected from "./HistoryContainer";
import {
  logOutRequest,
  updateDetailsRequest,
  handleChange,
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
          accountSettingsToggle={() => accountSettingsToggle()}
          showAccountMenu={showAccountMenu}
          logOut={() => props.logOutUser()}
          handleChange={() => props.handleChange(event)}
          samePassword={samePassword}
          updateInfo={() => updateInfo(event)}
          isFetching={props.app.isFetchingUpdate}
          restrictDemo = {restrictDemo}
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
