import React from "react";

const HomeComponent = (props) => {
  return (
    <div
      id="home-component"
 //     style={{backgroundImage: "url('public/imgs/HeaderImage.jpg')"}}
    >
      <div className="flex justify-between">
      <span className="text-white font-semibold m-1 ml-2 font-opensans mt-3">About</span>
<span className="text-white font-semibold m-1 mr-2 font-opensans mt-3">Account</span>
      </div>

    </div>
  );
};

export default HomeComponent;
