/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "assets/logo.png";
import avatar from "assets/avatar.jpg";
import { Link, useLocation } from "react-router-dom";
import { routeNames } from "routes/route";

const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="flex justify-between w-full h-[70px] bg-black pt-3">
      {/* Logo  */}
      <div className="w-[60px] h-[60px] ml-5">
        <Link to="/overview">
          <img src={logo} alt="" className="align-middle" />
        </Link>
      </div>

      {/* Menu Items */}
      <div className="flex mt-[20px] text-[#FEC850]">
        <ul>
          <li className="space-x-[50px] text-sm font-light">
            <Link to="/overview">Overview</Link>
            <Link to="/joinUs">Join Us</Link>
            <div className="content-center dropdown dropdown-hover">
              <label tabIndex={0} className="p-[10px] hover:text-white">
                Start
              </label>
              <ul
                tabIndex={0}
                className="p-2 mt-2 shadow bg-[#171717] dropdown-content menu rounded-box w-52 "
              >
                <li>
                  <Link
                    className="hover:bg-black focus:bg-[#171717]"
                    to={routeNames.NewDesign}
                  >
                    New Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:bg-black focus:bg-[#171717]"
                    to="/resourceDesign"
                  >
                    Resource Design
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/community">Community</Link>
            <Link to="/sayHello">Say Hello</Link>
          </li>
        </ul>
      </div>

      {/* Profile Avatar */}
      <div className="Avatar">
        <div className="relative mt-3 align-middle mr-7 ">
          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              <div>
                <img className="w-10 h-10 rounded-full" src={avatar} alt="" />
                <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
            </label>

            <ul
              tabIndex={0}
              className="p-2 shadow bg-[#171717] dropdown-content menu rounded-box w-52"
            >
              <li>
                <Link
                  className="hover:bg-black focus:bg-[#FEC850]"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link className="hover:bg-black focus:bg-[#FEC850]" to="#">
                  Setting
                </Link>
              </li>
              <li>
                <Link className="hover:bg-black focus:bg-[#FEC850]" to="#">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
