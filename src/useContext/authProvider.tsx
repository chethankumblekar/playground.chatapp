import { createContext, useState } from "react";
import { User } from "../models/Auth";

type AuthContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const AuthContext = createContext<AuthContextType>(undefined as any);

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    isAuthenticated: false,
    picture: "",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
