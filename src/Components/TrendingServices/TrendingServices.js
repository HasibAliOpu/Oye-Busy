import React from "react";
import airConditioner from "../../images/airconditionar.png";
import sofa from "../../images/sofa.png";
import house from "../../images/house.png";
import ac from "../../images/ac2.png";

const TrendingServices = () => {
  return (
    <div>
      <div className="text-center mt-14">
        <h1 className="lg:text-2xl lg:text-5xl font-semibold text-[#025B5D]">
          Trending Services
        </h1>
        <p className="lg:text-xl font-semibold pt-2">Premium Home Services</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-5 lg:p-20">
        <div className="border-2 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500">
          <img className="" src={airConditioner} alt="" />
          <p className="lg:text-2xl font-semibold text-orange-400">
            Air-Conditioner <br />
            Services
          </p>
        </div>
        <div className="border-2 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500">
          <img src={ac} alt="" />
          <p className="lg:text-2xl font-semibold text-orange-400">
            AC installation
          </p>
        </div>
        <div className="border-2 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500">
          <img src={sofa} alt="" />
          <p className="lg:text-2xl font-semibold text-orange-400">
            Sofa Cleaning <br /> Service
          </p>
        </div>
        <div className="border-2 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500">
          <img src={house} alt="" />
          <p className="lg:text-2xl font-semibold text-orange-400">
            Home Deep <br /> Cleaning Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingServices;
