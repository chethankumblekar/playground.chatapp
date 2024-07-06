import React, { useContext } from "react";
import { AuthContext } from "../../useContext/authProvider";
import "./Header.scss";
import { getDate } from "../../common/helper";

const Header = () => {
  const userContext = useContext(AuthContext);
  return (
    <div className="home-header">
      <h4>
        Hi,{" "}
        {userContext.user.name !== "" ? userContext.user.name : "please login"}
      </h4>
      <h4>{getDate()}</h4>
    </div>
  );
};

export default Header;
