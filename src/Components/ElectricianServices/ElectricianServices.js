import React from "react";
import fuse from "../../images/mcb___fuse.png";
import switches from "../../images/switches___sockets.png";
import wiring from "../../images/wiring.png";
import appliances from "../../images/appliance.png";
import chandelier from "../../images/chandelier.png";
import doorBell from "../../images/door_bell.png";

const ElectricianServices = () => {
  return (
    <div className="lg:flex lg:pl-8 mb-10 mt-20">
      <div className="text-center mt-14 mb-14">
        <h1 className="text-3xl font-semibold text-[#025B5D]">
          Electrician Services
        </h1>
        <p className="text-xl font-semibold pt-2">Premium Home Services</p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 p-5 lg:p-20">
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-10 lg:-mt-20" src={fuse} alt="" />
          <p className="text-sm lg:text-base font-semibold ">MCB & Fuse</p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Repairing & Installation
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-10 lg:-mt-20" src={switches} alt="" />
          <p className="text-sm lg:text-base font-semibold ">Switch & Socket</p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Shower, Faucets & Holder <br /> Installation & Repair
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-10 lg:-mt-20" src={wiring} alt="" />
          <p className="text-sm lg:text-base font-semibold ">Wiring</p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Toilet pot, Sink ,<br />
            Bathroom, Balcony pipe
          </p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-10 lg:-mt-20" src={appliances} alt="" />
          <p className="text-sm lg:text-base font-semibold ">Appliances</p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Painting, Clock, &<br />
            Photoframe
          </p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="mx-auto -mt-10 lg:-mt-20" src={chandelier} alt="" />
          <p className="text-sm lg:text-base font-semibold ">Chandelier</p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Holder, Hanger, Rod <br /> Installation
          </p>
        </div>
        <div className="mt-16 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-10 lg:-mt-20" src={doorBell} alt="" />
          <p className="text-sm lg:text-base font-semibold ">Door Bell</p>
          <p className="text-2xs lg:text-sm text-[#757575]">
            Bed, Table, Rock & Cabinet
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectricianServices;
