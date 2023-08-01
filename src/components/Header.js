import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img
      className="logo"
      alt="logo"
      src="https://play-lh.googleusercontent.com/Fv6iUHtFoW-CnVw9jxKs0JLOzlRRGZnFiJNjAcLg1Qn2CU_PhczqLY5q_CV0XQELfaU"
    />
  </Link>
);

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            {loggedIn ? (
              <button className="login" onClick={() => setLoggedIn(false)}>
                Logout
              </button>
            ) : (
              <button className="logout" onClick={() => setLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
