import React, { useContext, useEffect, useState } from "react";
import "./ChatsHomePage.scss";
import ChatItem from "../../ChatItem/ChatItem";
import ChatContainer from "../../ChatContainer/ChatContainer";
import SearchBar from "../../SearchBar/SearchBar";
import { callService } from "../../../services/baseService";
import { RequestType } from "../../../services/requestType";
import { UserMessage } from "./model";
import { AuthContext } from "../../../useContext/authProvider";

const ChatsHomePage = () => {
  const [recipient, setRecipient] = useState("");
  const [userMessages, setUserMessages] = useState<UserMessage[]>([]);
  const userContext = useContext(AuthContext);

  useEffect(() => {
    if (userContext.user) {
      loadRecipients();
    }
  }, [userContext.user]);

  const loadRecipients = async () => {
    try {
      const response = await callService("user", "messages", RequestType.GET);
      console.log(response);
      setUserMessages(response);
    } catch (error) {
      console.error("Failed to load messages", error);
    }
  };

  const handleSetRecipient = (email: string) => {
    console.log("Setting recipient:", email);
    setRecipient(email);
  };

  return (
    <div className="chats-page">
      <div className="chat-list">
        <SearchBar />
        <div className="list-items">
          {userMessages.map((item) => (
            <ChatItem
              avatar=""
              email={
                item.recipientId !== userContext.user.sub
                  ? item.recipientId
                  : item.senderId
              }
              lastMessage={item.content}
              key={item.id}
              setRecipient={handleSetRecipient}
            />
          ))}
        </div>
      </div>
      {recipient && <ChatContainer recipient={recipient} />}
    </div>
  );
};

export default ChatsHomePage;
