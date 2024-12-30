import React from "react";
import sample from "../../images/sample.jpg";
import "./ChatItem.scss";

interface ChatItemProps {
  avatar: string;
  lastMessage: string;
  email: string;
  setRecipient: (email: string) => void;
}

const ChatItem = (props: ChatItemProps) => {
  return (
    <div className="chat-item" onClick={(e) => props.setRecipient(props.email)}>
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
