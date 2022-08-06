import React from "react";
import stamp from "../../images/icon/stamp-02 1.png";
const StampSection = () => {
  return (
    <div className="grid grid-cols-2 p-5 lg:mx-28 my-10">
      <div className="m-auto">
        <img src={stamp} alt="" />
      </div>
      <div className="m-auto">
        <h1 className="text-xl lg:text-4xl font-semibold text-center">
          Hassle free services with <br />
          OyeBusy
        </h1>
      </div>
    </div>
  );
};

export default StampSection;
