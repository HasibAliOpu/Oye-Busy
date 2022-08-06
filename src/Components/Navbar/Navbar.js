import React from "react";
import navicon from "../../images/navicon.png";
import location from "../../images/icon/location.svg";
import playStore from "../../images/icon/google-playstore.svg";
import cart from "../../images/icon/cart.svg";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-[#F6F6F6] text-neutral px-8 py-0 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">
                My Account
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Edit Profile</a>
                </li>
                <li>
                  <a>Setting</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img src={navicon} alt="" />
        </a>
        <div className="navbar hidden lg:flex">
          <img src={location} alt="location" className="w-8" />
          <p className="font-mono font-bold text-sm  tracking-tighter">
            1st Floor, H356, Block B, Sector 22, Noida, Uttar Pradesh 201301
          </p>
        </div>
      </div>
      <div className="navbar-end  font-semibold hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Blog</a>
            <a>Career</a>
          </li>
          <li tabIndex="0">
            <a>
              My Account
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-orange-300 font-semibold">
              <li>
                <a>Edit Profile</a>
              </li>
              <li>
                <a>Setting</a>
              </li>
            </ul>
          </li>
        </ul>
        <span className="px-4">
          <img src={cart} alt="shopping cart" className="w-6" />
        </span>
        <a
          href="https://play.google.com/store/apps/details?id=com.oyebusy.oyebusy_customer"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-neutral px-5 ml-2 hover:text-warning"
        >
          <img src={playStore} alt="playStore" className="w-10 pr-1" />
          Download App
        </a>
      </div>
    </div>
  );
};

export default Navbar;
