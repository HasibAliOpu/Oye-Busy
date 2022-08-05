import React from "react";
import banner from "../../images/banner.png";
import pestControlBanner from "../../images/pestControl.png";
import sofaCleaning from "../../images/sofaCleaning.png";
import gejar from "../../images/gejar.png";
import saloon from "../../images/icon/saloon.png";
import electrician from "../../images/icon/electrician.png";
import plumber from "../../images/icon/plumber.png";
import cctv from "../../images/icon/cctv.png";
import ac from "../../images/icon/ac.png";
import truck from "../../images/icon/track.png";
import cleaning from "../../images/icon/cleaning.png";
import painting from "../../images/icon/painting.png";
import appliances from "../../images/icon/appliances.png";
import disinfection from "../../images/icon/disinfection.png";
import pestControl from "../../images/icon/pestControl.png";
import carpenter from "../../images/icon/carpenter.png";
const Banner = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative">
        <img src={banner} alt="" />
        <div className="absolute top-28 left-28">
          <h1 className="text-white text-center text-6xl font-serif tracking-wider">
            Home Services, <br />
            on demand
          </h1>
          <div class="form-control py-1">
            <div class="input-group">
              <button class="btn btn-square btn-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered pr-48"
              />
            </div>
          </div>
          <p className="text-white font-semibold">
            Examples: <span className="underline">Salon,</span>{" "}
            <span className="underline">Women's hair,</span>
            <span className="underline">Men's grooming,</span> & Many more..
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold py-3">
          What are your looking for?
        </h1>
        <div className="grid grid-cols-4 pl-10">
          <span className="my-3">
            <img className="w-14 pb-1" src={saloon} alt="" />
            <p className="font-semibold">Salon at Home</p>
          </span>
          <span className="my-3">
            <img className="w-14 pb-2" src={electrician} alt="" />
            <p className="font-semibold">Electrician</p>
          </span>
          <span className="my-3">
            <img className="w-24 py-2" src={plumber} alt="" />
            <p className="font-semibold">Plumber</p>
          </span>
          <span className="my-3">
            <img className="w-16 pb-2" src={cctv} alt="" />
            <p className="font-semibold">CCTV</p>
          </span>
          <span>
            <img className="w-20 py-4" src={ac} alt="" />
            <p className="font-semibold">AC Service</p>
          </span>
          <span>
            <img className="w-16 py-3" src={truck} alt="" />
            <p className="font-semibold">Packers & Movers</p>
          </span>
          <span>
            <img className="w-12 pt-2 pb-1" src={cleaning} alt="" />
            <p className="font-semibold">Cleaning</p>
          </span>
          <span>
            <img className="w-12 pt-2" src={painting} alt="" />
            <p className="font-semibold">House Painting</p>
          </span>
          <span className="pt-5">
            <img className="w-12 pt-4 ml-6 pb-2" src={appliances} alt="" />
            <p className="font-semibold">Home Appliances</p>
          </span>
          <span className="pt-5">
            <img className="w-12 ml-4 pt-2 pb-1" src={disinfection} alt="" />
            <p className="font-semibold">Disinfection</p>
          </span>
          <span className="pt-5">
            <img className="w-12 ml-4 pt-3 pb-1" src={pestControl} alt="" />
            <p className="font-semibold">Pest Control</p>
          </span>
          <span className="pt-5">
            <img className="w-14 pt-2 pb-1" src={carpenter} alt="" />
            <p className="font-semibold">Carpenter</p>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 px-2 mt-6">
          <img className="" src={gejar} alt="" />
          <img className="" src={pestControlBanner} alt="" />
          <img className="" src={sofaCleaning} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
