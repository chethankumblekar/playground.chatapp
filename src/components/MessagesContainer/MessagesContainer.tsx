import React from "react";
import "./MessagesContainer.scss";
import Message from "../Message/Message";

const MessagesContainer = () => {
  return (
    <div className="chat-messages-container">
      <Message />
    </div>
  );
};

export default MessagesContainer;
