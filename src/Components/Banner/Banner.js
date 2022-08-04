import React from "react";
import banner from "../../images/banner.png";
const Banner = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative">
        <img src={banner} alt="" />
        <div className="absolute top-28 left-28">
          <h1 className="text-white text-center text-6xl font-serif">
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
      <div></div>
    </div>
  );
};

export default Banner;
