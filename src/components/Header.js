import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <Link to="/">
    <img
      className="h-20 py-2 px-3 m-3"
      alt="logo"
      src="https://play-lh.googleusercontent.com/Fv6iUHtFoW-CnVw9jxKs0JLOzlRRGZnFiJNjAcLg1Qn2CU_PhczqLY5q_CV0XQELfaU"
    />
  </Link>
);

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-orange-100 shadow-xl">
      <div className="flex justify-between items-center py-3 px-6 md:px-12">
        <div className="flex items-center">
          <Title />
          <div className="md:hidden ml-3">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <ul
          className={`md:flex md:items-center ${
            menuOpen ? "block" : "hidden"
          } md:ml-auto md:mr-4`}
        >
          <li className="p-3 my-2 md:my-0 md:mr-3 font-semibold">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-3 my-2 md:my-0 md:mr-3 font-semibold">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-3 my-2 md:my-0 md:mr-3 font-semibold">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="p-3 my-2 md:my-0 md:mr-3 font-semibold">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <Link to={"/cart"}>
            <li className="p-3 my-2 md:my-0 md:mr-3 font-semibold flex items-center">
              🛒
              <sup className="font-bold text-lg ml-1">
                {cartItems.length}
              </sup>{" "}
            </li>
          </Link>
        </ul>

        <div className="flex items-center p-3 my-2 md:my-0 md:mr-3 font-semibold">
          {loggedIn ? (
            <>
              <span className="hidden md:block m-1">{user.name}</span>
              <button
                className="bg-sky-500 hover:bg-sky-700 rounded p-1 text-white font-semibold ml-2 md:ml-0"
                onClick={() => setLoggedIn(false)}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="bg-sky-500 hover:bg-sky-700 rounded p-1 text-white font-semibold ml-2 md:ml-0"
              onClick={() => setLoggedIn(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
