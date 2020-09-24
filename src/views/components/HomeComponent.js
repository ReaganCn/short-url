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
          <span className="text-xl text-center mb-2 font-semibold">
            <i
              className={`fa fa-cog text-darkviolet ${
                props.isFetching ? "animate-spin" : "slow-spin"
              }`}
            ></i>
            &nbsp;&nbsp;Update your profile
          </span>
          <div id="details" className="flex flex-col justify-between">
            <span className="mx-6 font-semibold">
              Full Name
              {/* <strong className="">{props.info.firstName}</strong> */}
            </span>
            <form className="flex justify-between flex-row my-4 mx-6">
              <input
                className="w-6/12 p-1 outline-none border border-purple-400 md:w-4/12 text-sm ml-2 rounded border-opacity-50"
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
            </form>
            <span className="mx-6 font-semibold">
              Password &nbsp;&nbsp;&nbsp;
            </span>
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded relative w-10/12 mx-auto my-4 text-sm"
              role="alert"
              style={
                props.restrictDemo ? { display: "block" } : { display: "none" }
              }
            >
              <span className="block sm:inline">
                Cannot update password on a Demo Account
              </span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
            <div
              className="flex justify-between flex-col md:flex-row my-4 mx-6"
              style={
                !props.restrictDemo ? { display: "block" } : { display: "none" }
              }
            >
              <input
                className=" p-1 outline-none border border-purple-400 w-6/12 md:w-4/12 text-sm ml-2 rounded border-opacity-50 md:my-0 my-2"
                type="password"
                name="newPassword"
                autoComplete="off"
                placeholder="New Password"
                onChange={props.handleChange}
                value={props.info.newPassword}
              ></input>
              <input
                className=" p-1 outline-none border border-purple-400 w-6/12 md:w-4/12 text-sm ml-2 rounded border-opacity-50 md:my-0 my-2"
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
                className="text-sm md:text-base border w-3/12 md:w-2/12 hover:text-white p-1 rounded hover:border-transparent ml-5 hover:bg-darkviolet bg-white border-darkviolet text-darkviolet float-right"
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

      {/*---------------------------------- ALERT ----------------------------------*/}
      <div
        className="relative w-full flex justify-center mx-auto"
        style={
          props.info.alert
            ? { visibility: "visible" }
            : { visibility: "collapse" }
        }
      >
        <div
          className="bg-purple-100 border border-purple-400 text-purple-700 px-4 py-2 rounded absolute text-sm w-4/12 z-10 mt-8"
          role="alert"
        >
          <span className="block sm:inline">{props.info.alertMessage}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={props.resetAlert}
          >
            <svg
              className="fill-current h-4 w-4 text-purple-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </div>

      {/*---------------------------------- ABOUT MENU ----------------------------------*/}

      <div className="flex justify-between mx-5" id="menu">
        <div className="md:w-1/4 w-6/12 flex flex-col">
        <span className="text-white font-semibold font-opensans mt-3 cursor-pointer hover:text-purple-200 md:text-base text-xs">
          About
        </span>
        {/*---------------------------------- About Dropdown ---------------------------------- */}
        <div className="relative md:ml-8 w-full md:w-11/12 mt-1" id="account-menu">
          <div
            className="w-full flex flex-col z-10 bg-darkviolet text-white font-opensans p-1 md:w-11/12 md:p-2 rounded text-left shadow-xl absolute left-0 md:text-sm text-xs"
            style={
              props.showAbout
                ? {
                    visibility: "visible",
                    animation: "0.7s linear 0s 1 normal none running fadein",
                  }
                : { visibility: "collapse" }
            }
          >
            <span>
            <p className=""><i className="fa fa-terminal"></i> &nbsp;&nbsp;Created by Charana Reagan</p> <br />
            <p className=""><i className="fa fa-laptop"></i> &nbsp; GitHub:<a href="https://github.com/ReaganCn" className=" text-blue-500" target="_blank"> ReaganCn </a></p>
            </span>
          </div>
        </div>
        </div>

        {/*---------------------------------- ACCOUNT MENU ---------------------------------- */}

        <div className="flex mt-3 flex-col hover:text-purple-200">
          <button
            id="account-button"
            className="text-white font-semibold font-opensans cursor-pointer hover:text-purple-200 focus:text-purple-300 md:w-64 md:text-base text-xs"
            onClick={props.accountMenuToggle}
          >
            {props.greeting}, {props.info.firstName}
          </button>
          <i className="fa fa-caret-down text-white mx-auto -mt-1 text-xs"></i>

          <div className="relative md:ml-8 w-full md:w-11/12" id="account-menu">
            <div
              className="w-full flex flex-col z-10 bg-white font-opensans md:h-16 h-12 p-1 md:w-11/12 justify-between md:p-2 rounded text-center shadow-xl absolute left-0"
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
                className="w-full text-darkviolet cursor-pointer hover:bg-darkviolet self-center rounded mx-auto hover:text-white text-xs md:text-sm"
                onClick={props.accountSettingsToggle}
              >
                Profile Settings&nbsp;&nbsp;&nbsp;
                <i className="fa fa-caret-right"></i>
              </button>
              <button
                className=" w-full mx-auto text-purple-600 font-bold cursor-pointer hover:bg-darkviolet hover:text-white rounded text-xs md:text-sm"
                onClick={props.logOut}
              >
                Logout&nbsp;&nbsp;&nbsp;<i className="fa fa-sign-out"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------- HEADER ----------------------------------*/}

      <div id="logo" className="w-4/12 mx-auto flex items-end">
        <img src="public/imgs/logo3.png" className="inline-block xl:max-w-lg" />
        <img
          id="logo-dot"
          src="public/imgs/logo-dot-white.png"
          // style={{ width: "25px", height: "25px" }}
          className=" w-3 md:w-6  h-3 md:h-6 mb-10"
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
