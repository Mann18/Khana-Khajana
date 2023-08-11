import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg md:text-xl lg:text-2xl mb-2">
          Built with ❤️ by {user.name}
        </p>
        <p className="text-gray-500 text-sm md:text-base">{user.email}</p>
      </div>
    </footer>
  );
};

export default Footer;
