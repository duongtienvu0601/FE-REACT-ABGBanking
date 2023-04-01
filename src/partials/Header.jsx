import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../utils/Dropdown";
import Logo from "../images/ABG_logo.png";

function Header() {
  const trigger = useRef(null);

  return (
    <header className="absolute w-full z-30 bg-white-500">
      <div className="max-w-6xl mx-auto px-10 sm:px-5">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden md:flex md:grow">
            <Link to="/" className="block" aria-label="Cruip">
              <div className="rounded-full">
                <img
                  className="w-12 h-12 rounded-full bg-white border-2 border-white-600"
                  src={Logo}
                  alt="Logo"
                />
              </div>
            </Link>
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/features"
                  className="text-black-900 hover:text-black-500 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                Market
                </Link>
              </li>
              <Dropdown title="Transaction">
                <li>
                  <Link
                    to="/wallet"
                    className="font-medium text-sm text-black-900 hover:text-purple-600 flex py-2 px-4 leading-tight"
                  >
                  Your wallet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/history"
                    className="font-medium text-sm text-black-900 hover:text-purple-600 flex py-2 px-4 leading-tight"
                  >
                  Transaction history
                  </Link>
                </li>
              </Dropdown>
              <li>
                <Link
                  to="/blog"
                  className="text-black-900 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                Document
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black-900 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                About us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-black-900 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                Products
                </Link>
              </li>
            </ul>
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                Log in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
