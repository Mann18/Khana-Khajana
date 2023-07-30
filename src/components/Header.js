const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://play-lh.googleusercontent.com/Fv6iUHtFoW-CnVw9jxKs0JLOzlRRGZnFiJNjAcLg1Qn2CU_PhczqLY5q_CV0XQELfaU"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
