import React from "react";
import appStore from "../../images/app-store.png";
import playStore from "../../images/google-play.png";
import bigPhone from "../../images/big-phone.png";
import smallPhone from "../../images/Small-phone.png";
import arrow from "../../images/icon/Arrow 1.png";
const ReferSection = () => {
  return (
    <div className="grid grid-cols-2 pt-10 my-16 mx-16 rounded bg-[#f2c09da4]">
      <div className="m-auto">
        <div className=" relative">
          <h1 className="text-[#025B5D] text-5xl font-semibold pb-5">
            Refer and or get link
          </h1>
          <p className="text-[#025B5D] font-semibold text-xl pb-6">
            Invite your friends
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-screen max-w-xs"
            />
            <span className="absolute top-2 right-32 pr-1">
              <button className="btn btn-sm border-none hover:bg-white bg-[#F2C19D85]">
                <img src={arrow} alt="" />
              </button>
            </span>
          </div>
          <div className="flex items-center">
            <img
              className="hover:scale-110 duration-700 ease-in-out"
              src={playStore}
              alt=""
            />
            <img
              className="hover:scale-110 duration-700 ease-in-out h-1/2"
              src={appStore}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex items-end gap-5">
        <img src={bigPhone} alt="" />
        <img className="h-1/2" src={smallPhone} alt="" />
      </div>
    </div>
  );
};

export default ReferSection;
