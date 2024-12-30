import React, { useContext } from "react";
import "./MessagesContainer.scss";
import Message from "../Message/Message";
import { UserMessage } from "../pages/Chats/model";
import { AuthContext } from "../../useContext/authProvider";

interface MessageContainerProps {
  messages: UserMessage[];
}

const MessagesContainer = (props: MessageContainerProps) => {
  const userContext = useContext(AuthContext);

  return (
    <div className="messages-container">
      {props.messages.map((message) => (
        <div
          className={`chat-message ${
            userContext.user.sub !== message.senderId ? "left" : "right"
          }`}
          key={message.id}
        >
          <Message content={message.content} time={message.sentAt} />
        </div>
      ))}
    </div>
  );
};

export default MessagesContainer;
