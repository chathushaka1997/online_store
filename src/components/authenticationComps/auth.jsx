import React, { createContext, useState, useContext, useEffect } from "react";
import { UserServices } from "../../services/UserServices";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    getUserData();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const getUserData = async () => {
    try {
      const response = await UserServices.getMe();

      if (response.success) {
        login(response.data);
      } else if (!response.success) {
        logout();
        console.log(response);
        if (typeof response.error == "string") {
          throw Error(response.error);
        } else {
          throw Error(response.error);
        }
      }
    } catch (error) {
      logout();
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Something went wrong");
      }
    }
  };

  return <AuthContext.Provider value={{ user, login, logout,getUserData }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
