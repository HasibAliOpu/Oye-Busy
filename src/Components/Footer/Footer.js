import React from "react";
import playStore from "../../images/google-play.png";
import Instagram from "../../images/icon/Instagram.png";
import point from "../../images/icon/point.png";
import linkedin from "../../images/icon/Linkedin.png";
import facebook from "../../images/icon/facebook.png";
import youtube from "../../images/icon/youtube.png";
import twitter from "../../images/icon/twitter.png";

const Footer = () => {
  return (
    <footer className="hidden lg:block footer text-center  p-10 bg-[#343434] text-white">
      <div className="flex gap-10 font-semibold">
        <p>RELATED SERVICES</p>
        <div className="px-6">
          <span className="border-r-2 px-2">Electrician</span>
          <span className="border-r-2 px-2">Plumber</span>
          <span className="border-r-2 px-2">Carpenter</span>
          <span className="border-r-2 px-2">Packers & Movers</span>
          <span className="border-r-2 px-2">Salon for Women</span>
          <span className="border-r-2 px-2">Salon for Men</span>
          <span className="border-r-2 px-2">Electronic Appliances</span>
          <span className="border-r-2 px-2">CCTV Installation & Repair</span>
          <span className="border-r-2 px-2">Re-Repair & Service</span>
          <span className="border-r-2 px-2">House Painter</span>
          <span className="border-r-2 px-2">Pest Control</span>
          <span className="border-r-2 px-2">Kitchen Cleaning</span>
          <span className="border-r-2 px-2">Bathroom Cleaning</span>
          <span className="border-r-2 px-2">Sofa Cleaning</span>
          <span className="border-r-2 px-2">Carpet cleaning</span>
          <span className="pl-2">Home Deep Cleaning</span>
        </div>
      </div>
      <div className="flex gap-10 my-10 font-semibold">
        <p>TOP LOCATIONS</p>
        <div className="px-6">
          <span className="border-r-2 px-2">Delhi</span>
          <span className="border-r-2 px-2">Gurgaon</span>
          <span className="border-r-2 px-2">Noida</span>
          <span className="border-r-2 px-2">Ghaziabad</span>
          <span className="border-r-2 px-2">Faridhabad</span>
          <span className="pl-2">Greater Noida</span>
        </div>
      </div>
      <div className="flex gap-10 my-10 text-lg font-semibold">
        <span>About Us </span>
        <span>Blog</span>
        <span>Near me</span>
        <span>Careers</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Offers & Gift Cards</span>
        <span>Contact Us</span>
      </div>
      <div className="flex justify-center gap-12">
        <div className="">
          <h1 className="text-[#2AEAEE] font-semibold">Contact Us</h1>
          <p>Phone: +919990001089</p>
          <p>Email: support@oyebusy.com</p>
        </div>
        <div className="">
          <h1 className="text-[#2AEAEE] font-semibold">Download Oyebusy App</h1>
          <a
            href="https://play.google.com/store/apps/details?id=com.oyebusy.oyebusy_customer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="hover:scale-110 duration-300 ease-in-out"
              src={playStore}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="">
        <div className="grid grid-flow-col mx-auto my-10 gap-7">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
          <img src={linkedin} alt="" />
          <img src={Instagram} alt="" />
          <img src={point} alt="" />
        </div>
        <div className="py-10 tracking-wider mx-auto">
          © 2022 OyeBusy Technologies Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
