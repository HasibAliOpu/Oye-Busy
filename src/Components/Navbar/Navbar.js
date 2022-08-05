import React from "react";
import navicon from "../../images/navicon.png";
import location from "../../images/icon/location.svg";
import playStore from "../../images/icon/google-playstore.svg";
import cart from "../../images/icon/cart.svg";

const Navbar = () => {
  return (
    <div class="navbar bg-[#F6F6F6] text-neutral px-8 py-0 shadow-xl">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl">
          <img src={navicon} alt="" />
        </a>
        <div class="navbar hidden lg:flex">
          <img src={location} alt="location" className="w-8" />
          <p className="font-mono font-bold text-sm  tracking-tighter">
            1st Floor, H356, Block B, Sector 22, Noida, Uttar Pradesh 201301
          </p>
        </div>
      </div>
      <div class="navbar-end  font-semibold">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a>Blog</a>
            <a>Career</a>
          </li>
          <li tabindex="0">
            <a>
              My Account
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-orange-300 font-semibold">
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
