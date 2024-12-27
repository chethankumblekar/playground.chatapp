import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

interface User {
  name: string;
  email: string;
  picture?: string;
  isAuthenticated: boolean;
}

interface AuthContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    isAuthenticated: false,
  });

  // Define the logout function
  const logout = () => {
    Cookies.remove("access_token"); // Clear cookie
    localStorage.removeItem("access_token"); // Clear local storage token if used
    setUser({
      name: "",
      email: "",
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
