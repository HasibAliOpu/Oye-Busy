import React from "react";
import basin from "../../images/Basin___sink.png";
import bathFittings from "../../images/Bath_fittings.png";
import blockage from "../../images/Blockage.png";
import drill from "../../images/Drill___hang.png";
import minor from "../../images/Minor_installations.png";
import tap from "../../images/Tap.png";
const PlumberServices = () => {
  return (
    <div className="flex pl-8 mb-10 mt-20">
      <div className="text-center mt-14 mb-14">
        <h1 className="text-3xl font-semibold text-[#025B5D]">
          Plumber Services
        </h1>
        <p className="text-xl font-semibold pt-2">Premium Home Services</p>
      </div>
      <div className="grid grid-cols-6 gap-5 p-20">
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-20" src={basin} alt="" />
          <p className="font-semibold ">Wash Basin & Sink</p>
          <p className="text-sm text-[#757575]">Repairing & Installation</p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={bathFittings} alt="" />
          <p className="font-semibold ">Bath Fittings</p>
          <p className="text-sm text-[#757575]">
            Shower, Faucets & Holder <br /> Installation & Repair
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={blockage} alt="" />
          <p className="font-semibold ">Blockage</p>
          <p className="text-sm text-[#757575]">
            Toilet pot, Sink ,<br />
            Bathroom, Balcony pipe
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={drill} alt="" />
          <p className="font-semibold ">Drill & Hole</p>
          <p className="text-sm text-[#757575]">
            Painting, Clock, &<br />
            Photoframe
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-20" src={minor} alt="" />
          <p className="font-semibold ">Minor Installations</p>
          <p className="text-sm text-[#757575]">
            Holder, Hanger, Rod <br /> Installation
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-20" src={tap} alt="" />
          <p className="font-semibold ">Mixer, Tap & Nozzle</p>
          <p className="text-sm text-[#757575]">Bed, Table, Rock & Cabinet</p>
        </div>
      </div>
    </div>
  );
};

export default PlumberServices;
