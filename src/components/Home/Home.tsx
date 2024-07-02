import React, { useContext } from "react";
import { AuthContext } from "../../useContext/authProvider";

const Home: React.FC = () => {
  const userContext = useContext(AuthContext);
  return (
    <div>
      Hello,{" "}
      {userContext.user.name !== "" ? userContext.user.name : "please login"}
    </div>
  );
};

export default Home;
