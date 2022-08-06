import React from "react";
import women from "../../images/whiteWomen.png";
const AboutUs = () => {
  return (
    <div className="bg-[#E5E4E9] mx-24 my-10 rounded-md shadow-xl flex">
      <div>
        <img className="rounded-xl" src={women} alt="" />
      </div>
      <div className="mx-auto my-auto">
        <div className="bg-white p-14 rounded">
          <h1 className="text-4xl text-[#017F82] font-semibold">
            Why People Choose <br /> Us
          </h1>
          <ul className="list-disc flex gap-10 pt-5 font-semibold">
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
