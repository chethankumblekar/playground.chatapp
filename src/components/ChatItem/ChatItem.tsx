import React from "react";
import sample from "../../images/sample.jpg";
import "./ChatItem.scss";

const ChatItem = () => {
  return (
    <div className="chat-item">
      <img src={sample} alt="sample" className="chat-avatar" />
      <div className="chat-info">
        <div className="user-name">Chethan</div>
        <div className="user-last-message">
          Hi, Where are you i'm looking for you from last 15 min.
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
