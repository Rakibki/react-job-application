import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../utils/button/Button";

const Header = () => {
  return (
    <div className="navbar px-4 md:px-16 lg:px-24 bg-[#7e90fe0d]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            <li><NavLink to={'/appliedJobs'}>Applied Jobs</NavLink></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-black font-CareerHub text-2xl">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 text-[#757575] ">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/blog'}>Blog</NavLink></li>
          <li><NavLink to={'/appliedJobs'}>Applied Jobs</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
      <Button text={"Star Applying"}/> </div>
    </div>
  );
};

export default Header;
