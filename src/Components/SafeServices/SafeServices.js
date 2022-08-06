import React from "react";
import deliveryMan from "../../images/delivery-man-red-uniform.png";
const SafeServices = () => {
  return (
    <div className="grid grid-cols-2 my-14 mx-40 bg-[#ECECEE] rounded-xl shadow-xl">
      <div className="">
        <h1 className="text-5xl text-[#025B5D] pt-14 text-center font-semibold">
          100% Safe Services
        </h1>
        <span className="flex gap-24 text-2xl pl-24 pt-8">
          <ul className="list-disc">
            <li>Masks</li>
            <li>Gloves</li>
          </ul>
          <ul className="list-disc">
            <li>Temperature Checks</li>
            <li>Sanitized Tools</li>
          </ul>
        </span>
      </div>
      <div className="">
        <img className="rounded-xl" src={deliveryMan} alt="" />
      </div>
    </div>
  );
};

export default SafeServices;
