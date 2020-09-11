import React from "react";

const HomeComponent = (props) => {
  return (
    <div
      id="home-component"
      className="w-full"
      //     style={{backgroundImage: "url('public/imgs/HeaderImage.jpg')"}}
    >
      {/*---------------------------------- SETTINGS POPUP--------------------------*/}

      <div
        id="popup-wrapper"
        className="fixed flex justify-center w-full z-10 content-center h-full bg-gray-700 bg-opacity-75"
        style={
          props.showAccountSettings
            ? { visibility: "visible" }
            : { visibility: "collapse" }
        }
      >
        <div
          id="account-settings-popup"
          className="md:w-5/12 bg-white flex flex-col rounded-lg p-3 shadow-2xl self-center opacity-100 my-20 justify-between content-center h-auto"
        >
          <span
            className="text-xl text-center mb-2 font-semibold"
          ><i className={`fa fa-cog text-darkviolet ${props.isFetching ? "animate-spin" : "slow-spin"}`} ariaHidden="true"></i>
            &nbsp;&nbsp;Update your profile
          </span>
          <div id="details" className="flex flex-col justify-between">
            <span className="mx-6 font-semibold">
              Full Name
              {/* <strong className="">{props.info.firstName}</strong> */}
            </span>
            <div className="flex justify-between flex-row my-4 mx-6">
              <input
                className=" p-1 outline-none border border-purple-400 w-4/12 text-sm ml-2 rounded border-opacity-50"
                type="text"
                name="newFirstName"
                autoComplete="off"
                placeholder=""
                onChange={props.handleChange}
                value={props.info.newFirstName}
              ></input>

              <button
                id="newfirstname"
                className="text-sm md:text-base border w-3/12 md:w-2/12 hover:text-white p-1 rounded hover:border-transparent ml-5 hover:bg-darkviolet bg-white border-darkviolet text-darkviolet"
                onClick={props.updateInfo}
              >
                <span>Update</span>
              </button>
            </div>
            <span className="mx-6 font-semibold">
              Password &nbsp;&nbsp;&nbsp;
            </span>
            <div className="flex justify-between flex-row my-4 mx-6">
              <input
                className=" p-1 outline-none border border-purple-400 w-4/12 text-sm ml-2 rounded border-opacity-50"
                type="password"
                name="newPassword"
                autoComplete="off"
                placeholder="New Password"
                onChange={props.handleChange}
                value={props.info.newPassword}
              ></input>
              <input
                className=" p-1 outline-none border border-purple-400 w-4/12 text-sm ml-2 rounded border-opacity-50"
                type="password"
                placeholder="Confirm Password"
                onChange={props.handleChange}
                name="confirmPassword"
                value={props.info.confirmPassword}
              ></input>
              <span
                className="inline-block text-red-700 font-bold"
                style={
                  props.samePassword
                    ? { visibility: "collapse" }
                    : { visibility: "visible" }
                }
              >
                &nbsp;&nbsp;&nbsp;x
              </span>

              <button
                className="text-sm md:text-base border w-3/12 md:w-2/12 hover:text-white p-1 rounded hover:border-transparent ml-5 hover:bg-darkviolet bg-white border-darkviolet text-darkviolet"
                id="newpassword"
                onClick={props.updateInfo}
              >
                <span>Update</span>
              </button>
            </div>
          </div>
          <button
            className="text-sm md:text-base border w-3/12 md:w-2/12 text-white p-1 rounded border-transparent ml-auto bg-darkviolet hover:bg-white hover:border-darkviolet hover:text-darkviolet mr-6 mb-2"
            onClick={props.accountSettingsToggle}
          >
            Done
          </button>
        </div>
      </div>

      {/*---------------------------------- MENU ----------------------------------*/}

      <div className="flex justify-between mx-5" id="menu">
        <span className="text-white font-semibold ml-2 font-opensans mt-3 cursor-pointer hover:text-purple-200">
          About
        </span>
        <div className="flex mt-3 flex-col hover:text-purple-200">
          <button
            className="text-white font-semibold font-opensans cursor-pointer hover:text-purple-200 focus:text-purple-300 md:w-64"
            onClick={props.accountMenuToggle}
          >
            {props.greeting}, {props.info.firstName}
          </button>
          <i className="fa fa-caret-down text-white mx-auto -mt-1 text-xs"></i>

          <div className="relative md:ml-8 w-full md:w-11/12" id="account-menu">
            <div
              className="w-full flex flex-col z-10 bg-white font-opensans h-20 md:w-11/12 justify-between p-2 rounded text-center shadow-xl absolute left-0"
              style={
                props.showAccountMenu
                  ? {
                      visibility: "visible",
                      animation: "0.7s linear 0s 1 normal none running fadein",
                    }
                  : { visibility: "collapse" }
              }
            >
              <button
                className="w-full text-darkviolet cursor-pointer hover:bg-darkviolet self-center rounded mx-auto hover:text-white"
                onClick={props.accountSettingsToggle}
              >
                Profile Settings&nbsp;&nbsp;&nbsp;
                <i className="fa fa-caret-right"></i>
              </button>
              <button
                className=" w-full mx-auto text-purple-600 font-bold cursor-pointer hover:bg-darkviolet hover:text-white rounded"
                onClick={props.logOut}
              >
                Logout&nbsp;&nbsp;&nbsp;<i className="fa fa-sign-out"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="logo" className="w-4/12 mx-auto flex items-end">
        <img src="public/imgs/logo3.png" className="inline-block xl:max-w-lg" />
        <img
          id="logo-dot"
          src="public/imgs/logo-dot-white.png"
          // style={{ width: "25px", height: "25px" }}
          className="w-6 h-6 mb-10"
        />
      </div>

      <div className="text-center">
        <span className="font-opensans text-white md:text-2xl font-semibold text-lg">
          Get short and customized links in an instant
        </span>
      </div>
    </div>
  );
};

export default HomeComponent;
