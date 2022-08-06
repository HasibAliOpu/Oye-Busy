import React from "react";
import yellowBanner from "../../images/yellowBanner.png";
const DiscountPart = () => {
  return (
    <div className="bg-gradient-to-r from-[#F1BA29] to-[#FBD268] my-10">
      <div className="flex py-10 lg:py-0 px-4 lg:px-8">
        <div className="w-2/3">
          <img src={yellowBanner} alt="" />
        </div>
        <div className="flex items-center mx-auto text-center ">
          <div>
            <h1 className="text-xs lg:text-5xl font-semibold font-mono">
              TRY OUR TRENDING SERVICES WITH UPTO 50% OFF!
            </h1>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b border-gray-800 lg:w-1/4" />
              <span className="text-2xs lg:text-2xl text-center font-mono">
                On any service you book
              </span>
              <span className="w-1/5 border-b border-gray-800 lg:w-1/4" />
            </div>
            <button className="btn btn-xs lg:btn-outline btn-error mt-2 lg:mt-8 rounded-full font-bold px-8">
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
