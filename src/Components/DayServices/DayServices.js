import React from "react";
import carpenter from "../../images/Carpenter-PNG-Image.png";
import plumber from "../../images/plumber.png";
import electrician from "../../images/electrician.png";
import painter from "../../images/painter.png";
import pestControl from "../../images/insecticide.png";
const DayServices = () => {
  return (
    <div>
      <div className="text-center mt-14 mb-14">
        <h1 className="text-2xl lg:text-5xl font-semibold text-[#025B5D]">
          Same Day Services
        </h1>
        <p className="lg:text-xl font-semibold pt-2">Premium Home Services</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 p-5 lg:p-20">
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-20" src={carpenter} alt="" />
          <p className="text-xs lg:text-2xl font-semibold ">
            Carpentry <br />
            Services
          </p>
        </div>
        <div className="p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="w-3/5 mx-auto -mt-20" src={plumber} alt="" />
          <p className="text-xs lg:text-2xl font-semibold ">
            Plumbing <br />
            Services
          </p>
        </div>
        <div className="mt-14 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="w-3/5 mx-auto -mt-20" src={electrician} alt="" />
          <p className="text-xs lg:text-2xl font-semibold ">
            Electrical <br />
            Services
          </p>
        </div>
        <div className="mt-14 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="w-4/6 mx-auto -mt-20" src={painter} alt="" />
          <p className="text-xs lg:text-2xl font-semibold ">
            Painting <br />
            Services
          </p>
        </div>
        <div className="mt-14 lg:mt-0 p-3 text-center rounded-2xl shadow-xl hover:scale-110 ease-in-out duration-500 bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FFECCA]">
          <img className="-mt-28" src={pestControl} alt="" />
          <p className="text-xs lg:text-2xl font-semibold ">
            Pest Control <br />
            Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayServices;
