import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SoftDev from "../Images/SoftDev.jpg";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSchoolDropdownOpen, setSchoolDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setSupportDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSchoolDropdown = () =>
    setSchoolDropdownOpen(!isSchoolDropdownOpen);
  const toggleSupportDropdown = () =>
    setSupportDropdownOpen(!isSupportDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="shadow-none sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={SoftDev}
              className="mr-6 h-24"
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Link>
          <div className="flex items-center lg:order-3 lg:px-24 lg:space-x-10">
            <Link
              to="/about"
              className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Hire Me
            </Link>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zM3 10h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-orange-500" : "text-black-700"} 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              {/* Add more links as needed */}
              <li>
                <div
                  className="relative dropdown px-3"
                  onMouseEnter={toggleSupportDropdown}
                  onMouseLeave={toggleSupportDropdown}
                >
                  <span className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer">
                    Portfolio
                  </span>
                  {isSupportDropdownOpen && (
                    <ul className="absolute bg-white pt-2 border border-gray-200 dropdown">
                      <li>
                        <NavLink
                          to="/portfolio"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Portfolio
                        </NavLink>
                        <NavLink
                          to="/gallery"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Gallery
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/planner"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Planner
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin-login"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Site Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
