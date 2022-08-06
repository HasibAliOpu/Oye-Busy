import React from "react";
import yellowBanner from "../../images/yellowBanner.png";
const DiscountPart = () => {
  return (
    <div className="bg-gradient-to-r from-[#F1BA29] to-[#FBD268] my-10">
      <div className="flex px-8">
        <div className="">
          <img src={yellowBanner} alt="" />
        </div>
        <div className="flex items-center mx-auto text-center ">
          <div>
            <h1 className="text-5xl font-semibold font-mono">
              TRY OUR TRENDING SERVICES <br /> WITH UPTO 50% OFF!
            </h1>
            <div className="flex items-center justify-between mt-4">
              <span className="w-3/5 border-b border-gray-800 lg:w-1/4" />
              <span className="text-2xl text-center font-mono">
                On any service you book
              </span>
              <span className="w-3/5 border-b border-gray-800 lg:w-1/4" />
            </div>
            <button className="btn btn-outline btn-error mt-8 rounded-full font-bold px-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.oyebusy.oyebusy_customer"
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK A SERVICE
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPart;
