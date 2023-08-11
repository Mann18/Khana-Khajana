import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => (
  <Link to="/">
    <img
      className="h-20 py-2 px-3 m-3 "
      alt="logo"
      src="https://play-lh.googleusercontent.com/Fv6iUHtFoW-CnVw9jxKs0JLOzlRRGZnFiJNjAcLg1Qn2CU_PhczqLY5q_CV0XQELfaU"
    />
  </Link>
);

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems.length);
  return (
    <div className="flex h-[100px] bg-orange-100 justify-between shadow-xl ">
      <Title />

      <ul className="flex">
        <li className="p-3 my-5 ">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="p-3 my-5 ">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="p-3 my-5 ">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="p-3 my-5 ">
          <Link to={"/instamart"}>Instamart</Link>
        </li>
        <Link to={"/cart"}><li className="p-3 my-5 ">🛒 {cartItems.length}</li></Link>
      </ul>

      <div className="my-5 p-3">
        <span>{user.name} </span>
        {loggedIn ? (
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded p-1 text-white font-semibold"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded p-1 text-white font-semibold"
            onClick={() => setLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
