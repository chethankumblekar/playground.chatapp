import React from "react";
import "./ChatsHomePage.scss";
import ChatItem from "../../ChatItem/ChatItem";
import ChatContainer from "../../ChatContainer/ChatContainer";
import RecentChats from "../../RecentChats/RecentChats";
import SearchBar from "../../SearchBar/SearchBar";

const ChatsHomePage = () => {
  return (
    <div className="chats-page">
      <div className="chat-list">
        <SearchBar />
        <div className="list-items">
          {/* <RecentChats /> */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => {
            return <ChatItem key={item} />;
          })}
        </div>
      </div>
      <ChatContainer />
    </div>
  );
};

export default ChatsHomePage;
