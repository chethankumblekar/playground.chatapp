import React from "react";
import SidePanel from "../SidePanel/SidePanel";
import Header from "../Header/Header";
import "./Home.scss";
import ChatsHomePage from "../pages/Chats/ChatsHomePage";
import useAuth from "../../useContext/authProvider";
import Login from "../../containers/Login";
import { Navigate, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      {user.sub ? (
        <div className="home-container">
          <SidePanel />
          <div className="center">
            <Header />
            <ChatsHomePage />
          </div>
        </div>
      ) : (
        <Navigate to={{ pathname: "/login" }} />
      )}
    </div>
  );
};

export default Home;
