import Logo from "../assets/images/logo.png";
import {  NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Header = () => {
  const cart = useSelector(state => state.cartState.cartList) 
  const notificationCount = cart.length;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define active and inactive classes
  const activeClass =
    "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0";
  const inactiveClass =
    "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="ET-Shopping Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            ET-Shopping
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                onClick={() => setIsMenuOpen(false)}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li>
              <div className="flex items-center space-x-2 font-semibold">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  My cart
                </NavLink>
                <div className="relative">
                  {notificationCount > 0 && (
                    <span className="absolute -top-5 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
