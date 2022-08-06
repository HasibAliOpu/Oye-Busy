import React from "react";
import setting from "../../images/icon/setting.png";
import human from "../../images/icon/human.png";
import wallet from "../../images/icon/wallet.png";

const AssuredPart = () => {
  return (
    <div className="bg-[#ECECEE] my-8 p-10">
      <h1 className="text-center pt-8 pb-14 text-6xl font-bold">
        Assured Peace of Mind
      </h1>
      <div className="flex justify-center gap-10">
        <div className="flex items-center gap-3">
          <img src={setting} alt="" />
          <span>
            <h2 className="text-2xl font-semibold">High Quality Work</h2>
            <p>
              Only authorized Service experts and <br />
              genuine spare parts and equipments
            </p>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img src={human} alt="" />
          <span>
            <h2 className="text-2xl font-semibold">Hassle Free</h2>
            <p>
              Sit back and relax. <br />
              We do all the work
            </p>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img src={wallet} alt="" />
          <span>
            <h2 className="text-2xl font-semibold">Totally Cashless</h2>
            <p>
              Pay online for Safe & Secure payment. <br /> many benefits and
              offers available with online payment
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssuredPart;
