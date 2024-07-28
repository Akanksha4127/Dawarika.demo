import React, { act, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AlignJustify } from "lucide-react";
import { Logo } from "../../utils/Image.js";

 function Header() {

  const [activeMenu, setActivemenu] = useState(false)

  const activeMenuVisible = (() => setActivemenu(!activeMenu));





  return (
    <div className="font-[popins] text-xl font-semibold w-full fixed z-50 top-0 h-28            ">
      <header className="shadow sticky  ">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="mr-3 h-12" alt="Logo" />
            </Link>
            <div className="flex items-center lg:order-2 md:order-3">
              <Link
                to="#"
                className="text-white bg-blue-500 hover:bg-bLue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:text-xl transition ease-in-out delay-250"
              >
                +91 9999994155
              </Link>
            </div>

            <div className="Hamberger space-y-1 md:hidden lg:hidden xl:hidden 2xl:hiddden">
              <button onClick={activeMenuVisible}>
                <AlignJustify size={34} />
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-500" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-bLue-500 lg:p-0 hover:text-2xl transition ease-in-out delay-250`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-500" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 hover:text-2xl transition ease-in-out delay-250 `
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-500" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500  lg:p-0 hover:text-2xl transition ease-in-out delay-250`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {activeMenu && (
        <div className="hambercontent h-60 w-28 bg-white border-gray-200 rounded-md border-2 absolute right-0 z-30  md:hidden">
          <div
            className="flex-col items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-bLue-500" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-bLue-500  lg:p-0 hover:text-2xl transition ease-in-out delay-250`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:text-2xl transition ease-in-out delay-250`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-bLue-500 " : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-bLue-500  lg:p-0 hover:text-2xl transition ease-in-out delay-250`
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header
