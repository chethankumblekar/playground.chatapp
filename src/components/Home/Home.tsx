import React from "react";
import SidePanel from "../SidePanel/SidePanel";
import Header from "../Header/Header";
import "./Home.scss";
import ChatsHomePage from "../pages/Chats/ChatsHomePage";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <SidePanel />
      <div className="center">
        <Header />
        <ChatsHomePage />
      </div>
    </div>
  );
};

export default Home;
