import { createContext, useState, useMemo, useContext } from "react";
import Cookies from "js-cookie";
import { User } from "../models/Auth";

type AuthContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(undefined as any);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    given_name: "",
    family_name: "",
    sub: "",
    isAuthenticated: false,
    picture: "",
  });

  // Define the logout function
  const logout = () => {
    Cookies.remove("access_token");
    localStorage.removeItem("access_token");
    setUser({
      given_name: "",
      family_name: "",
      sub: "",
      isAuthenticated: false,
      picture: "",
    });
  };

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
