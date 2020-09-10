import React from "react";

const HomeComponent = (props) => {
  return (
    <div
      id="home-component"
      className="w-full"
      //     style={{backgroundImage: "url('public/imgs/HeaderImage.jpg')"}}
    >
      <div className="flex justify-between mx-5" id="menu">
        <span className="text-white font-semibold ml-2 font-opensans mt-3 cursor-pointer hover:text-purple-200">
          About
        </span>
        <div className="flex mt-3 flex-col hover:text-purple-200">
        <span className="text-white font-semibold mr-2 font-opensans cursor-pointer hover:text-purple-200">
          {props.greeting}, {props.info.firstName}
        </span>
        <i className="fa fa-caret-down text-white mx-auto -mt-1 text-xs"></i>
        <div className="relative ml-10">       
         <div id="account-menu" className="flex flex-col z-10 bg-white font-opensans h-20 w-11/12 justify-between p-2 rounded text-center shadow-xl absolute left-0">
            <span className="w-full text-darkviolet cursor-pointer hover:bg-darkviolet self-center rounded mx-auto hover:text-white">Profile Settings&nbsp;&nbsp;&nbsp;<i className="fa fa-caret-right"></i></span>
            <span className=" w-full mx-auto text-purple-600 font-bold cursor-pointer hover:bg-darkviolet hover:text-white rounded">Logout&nbsp;&nbsp;&nbsp;<i className="fa fa-sign-out"></i></span>
        </div></div>

        </div>

      </div>
      <div id="logo" className="w-4/12 mx-auto flex items-end">
        <img src="public/imgs/logo3.png" className="inline-block xl:max-w-lg"/>
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
