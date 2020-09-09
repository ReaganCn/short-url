import React from "react";

const HomeComponent = (props) => {
  return (
    <div
      id="home-component"
      className="w-full"
      //     style={{backgroundImage: "url('public/imgs/HeaderImage.jpg')"}}
    >
      <div className="flex justify-between" id="menu">
        <span className="text-white font-semibold m-1 ml-2 font-opensans mt-3">
          About
        </span>
        <span className="text-white font-semibold m-1 mr-2 font-opensans mt-3">
          {props.greeting}, {props.info.firstName}
        </span>
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
