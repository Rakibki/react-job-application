import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../utils/button/Button";
import { useUserAuth } from "./UserAuth";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

const Header = () => {
  const { user } = useContext(useUserAuth);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("log out");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/appliedJobs"}>Applied Jobs</NavLink>
      </li>
      <li>{user && <NavLink to={"/profile"}>Profile</NavLink>}</li>
    </>
  );
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
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-black font-CareerHub text-2xl">
          CareerHub
        </a>
        {user && <h2 className="mt-2">{user?.displayName}</h2>}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 text-[#757575] ">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div onClick={handleLogOut}>
            <Button text={"Log out"} />
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to={"/login"}>
              <Button text={"Login"} />
            </Link>

            <Link to={"/register"}>
              <Button text={"Register"} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
