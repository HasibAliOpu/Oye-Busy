import React from "react";
import washingMachine from "../../images/washingmachine.png";
import Freeze from "../../images/freeze.png";
import oven from "../../images/oven.png";
import RO from "../../images/waterFilter.png";
import ledTV from "../../images/ledTv.png";
import AC from "../../images/ac.png";
const AppliancesServices = () => {
  return (
    <div>
      <div className="text-center mt-14 mb-14">
        <h1 className="text-2xl lg:text-5xl font-semibold text-[#025B5D]">
          Home Appliances Services
        </h1>
        <p className="lg:text-xl font-semibold pt-2">Premium Home Services</p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 p-5 lg:p-20">
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-20" src={washingMachine} alt="" />
          <p className="text-xs lg:text-base font-semibold ">
            Washing Machine <br />
            Repair
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={Freeze} alt="" />
          <p className="text-xs lg:text-base font-semibold ">
            Refrigerator <br />
            Repair / Service
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={oven} alt="" />
          <p className="text-xs lg:text-base font-semibold ">
            Microwave Repair
          </p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={RO} alt="" />
          <p className="text-xs lg:text-base font-semibold ">RO Service</p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={ledTV} alt="" />
          <p className="text-xs lg:text-base font-semibold">LED TV Repair</p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-20" src={AC} alt="" />
          <p className="text-xs lg:text-base font-semibold ">AC Services</p>
        </div>
      </div>
    </div>
  );
};

export default AppliancesServices;
