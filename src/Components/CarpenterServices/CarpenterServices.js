import React from "react";
import bed from "../../images/Bed.png";
import curtain from "../../images/Curtain _ Blinds.png";
import door from "../../images/door 1.png";
import cupboard from "../../images/Drawer___cupboard.png";
import Fittings from "../../images/Fitting___minor_installations.png";
import furniture from "../../images/Furniture_assembly.png";
const CarpenterServices = () => {
  return (
    <div className="lg:flex lg:pl-8 mb-10 mt-20">
      <div className="text-center mt-14 mb-14">
        <h1 className="text-3xl font-semibold text-[#025B5D]">
          Carpenter Services
        </h1>
        <p className="text-xl font-semibold pt-2">Premium Home Services</p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 p-5 lg:p-20">
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-10 lg:-mt-20" src={bed} alt="" />
          <p className="text-sm lg:text-base font-semibold ">Bed</p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Repairing & Installation
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-10 lg:-mt-20" src={curtain} alt="" />
          <p className="text-sm lg:text-base font-semibold ">
            Curtain & Blinds
          </p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Shower, Faucets & Holder <br /> Installation & Repair
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-10 lg:-mt-20" src={door} alt="" />
          <p className="text-sm lg:text-base font-semibold ">Door</p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Toilet pot, Sink ,<br />
            Bathroom, Balcony pipe
          </p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-10 lg:-mt-20" src={cupboard} alt="" />
          <p className="text-sm lg:text-base font-semibold ">
            Drawer & Cupboard
          </p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Painting, Clock, &<br />
            Photoframe
          </p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-10 lg:-mt-20" src={Fittings} alt="" />
          <p className="text-sm lg:text-base font-semibold ">
            Fittings & Installations
          </p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Holder, Hanger, Rod <br /> Installation
          </p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-10 lg:-mt-20" src={furniture} alt="" />
          <p className="text-sm lg:text-base font-semibold ">
            Furniture Assembly
          </p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Bed, Table, Rock & Cabinet
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarpenterServices;
