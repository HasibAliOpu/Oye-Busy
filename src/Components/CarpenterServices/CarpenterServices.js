import React from "react";
import bed from "../../images/Bed.png";
import curtain from "../../images/Curtain _ Blinds.png";
import door from "../../images/door 1.png";
import cupboard from "../../images/Drawer___cupboard.png";
import Fittings from "../../images/Fitting___minor_installations.png";
import furniture from "../../images/Furniture_assembly.png";
const CarpenterServices = () => {
  return (
    <div className="flex pl-8 mb-10 mt-20">
      <div className="text-center mt-14 mb-14">
        <h1 className="text-3xl font-semibold text-[#025B5D]">
          carpenter Services
        </h1>
        <p className="text-xl font-semibold pt-2">Premium Home Services</p>
      </div>
      <div className="grid grid-cols-6 gap-5 p-20">
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-20" src={bed} alt="" />
          <p className="font-semibold ">Bed</p>
          <p className="text-sm text-[#757575]">Repairing Support, Legs</p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={curtain} alt="" />
          <p className="font-semibold ">Curtain & Blinds</p>
          <p className="text-sm text-[#757575]">
            Motorized, Non-Motorized <br />
            Blinds & Curtain Rod
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto w-1/2 -mt-20" src={door} alt="" />
          <p className="font-semibold ">Door</p>
          <p className="text-sm text-[#757575]">
            Repairing, Accessories,
            <br />
            Installation
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={cupboard} alt="" />
          <p className="font-semibold ">Drawer & Cupboard</p>
          <p className="text-sm text-[#757575]">Channel, Hinge Repair</p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={Fittings} alt="" />
          <p className="font-semibold ">Fittings & Installations</p>
          <p className="text-sm text-[#757575]">
            Holder, Hanger, Rod <br /> Installation
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-20" src={furniture} alt="" />
          <p className="font-semibold ">Furniture Assembly</p>
          <p className="text-sm text-[#757575]">Bed, Table, Rock & Cabinet</p>
        </div>
      </div>
    </div>
  );
};

export default CarpenterServices;
