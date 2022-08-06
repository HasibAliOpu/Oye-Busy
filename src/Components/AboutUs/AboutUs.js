import React from "react";
import women from "../../images/whiteWomen.png";
const AboutUs = () => {
  return (
    <div className="bg-[#E5E4E9] mx-4 lg:mx-24 my-10 p-5 rounded-md shadow-xl flex">
      <div className="">
        <img className="rounded-xl h-32 lg:h-full" src={women} alt="" />
      </div>
      <div className="mx-auto my-auto">
        <div className="bg-white p-3 lg:px-14 lg:py-24 rounded">
          <h1 className="text-xs lg:text-4xl text-[#017F82] font-semibold">
            Why People Choose <br /> Us
          </h1>
          <ul className="list-disc flex gap-10 lg:pt-5 pl-3 font-semibold text-2xs lg:text-xl">
            <span>
              <li>Affordable Rates</li>
              <li>On Time Service</li>
            </span>
            <span>
              <li>Verified Professionals</li>
              <li>Excellent Service</li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
