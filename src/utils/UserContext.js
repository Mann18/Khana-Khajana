import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
  handleLogin: () => {},
  handleLogout: () => {},
});

export default UserContext;
