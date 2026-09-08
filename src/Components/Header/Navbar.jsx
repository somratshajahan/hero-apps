import React from "react";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router";
import { IoMdHome } from "react-icons/io";
import { FaAppStore, FaGithub } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
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
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" className="font-semibold flex items-center gap-2">
                <IoMdHome className="text-lg" /> Home
              </Link>
            </li>
            <li>
              <Link to="/mainApps" className="font-semibold flex items-center gap-2">
                <FaAppStore className="text-lg" /> Apps
              </Link>
            </li>
            <li>
              <Link to="/installation" className="font-semibold flex items-center gap-2">
                <MdInstallDesktop className="text-lg" /> Installation
              </Link>
            </li>
          </ul>
        </div>

      
        <Link
          to="/"
          className="btn btn-ghost text-xl inline-flex items-center gap-2"
        >
          <img className="h-10 w-10" src={logoImg} alt="Hero.io Logo" />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
            HERO.IO
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/" className="font-semibold flex items-center gap-2">
              <IoMdHome className="text-xl" /> Home
            </Link>
          </li>
          <li>
            <Link to="/mainApps" className="font-semibold flex items-center gap-2">
              <FaAppStore className="text-xl" /> Apps
            </Link>
          </li>
          <li>
            <Link
              to="/installation"
              className="font-semibold flex items-center gap-2"
            >
              <MdInstallDesktop className="text-xl" /> Installation
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-lg flex items-center gap-2">
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;