import "./ChatContainer.scss";
import MessagesContainer from "../MessagesContainer/MessagesContainer";
import ChatHeader from "../ChatHeader/ChatHeader";
import InputPrompt from "../InputPromt/InputPrompt";
import { useContext, useEffect, useState } from "react";
import useSignalR from "../../signalR/useSignalR";
import { callService } from "../../services/baseService";
import { RequestType } from "../../services/requestType";
import { UserMessage } from "../pages/Chats/model";
import { AuthContext } from "../../useContext/authProvider";

interface ChatContainerProps {
  recipient: string;
}

const ChatContainer = (props: ChatContainerProps) => {
  const { hubConnection, connectionState } = useSignalR();
  const [userMessages, setUserMessages] = useState<UserMessage[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const recipientEmail = props.recipient;
  const userContext = useContext(AuthContext);

  useEffect(() => {
    if (hubConnection) {
      hubConnection.on(
        "ReceiveMessage",
        (senderEmail: string, message: string) => {
          setUserMessages((prevMessages) => [
            ...prevMessages,
            {
              content: message,
              id: "",
              recipientId: userContext.user.sub,
              senderId: senderEmail,
              groupId: undefined,
              sentAt: new Date().toISOString(),
            },
          ]);
        }
      );
      hubConnection.on("UserConnected", (userId) => {
        setOnlineUsers((prev) => [...prev, userId]);
      });

      hubConnection.on("UserDisconnected", (userId) => {
        setOnlineUsers((prev) => prev.filter((id) => id !== userId));
      });
    }

    return () => {
      hubConnection.off("ReceiveMessage");
    };
  }, [hubConnection]);

  useEffect(() => {
    loadOneOnOneMessages();
  }, [recipientEmail]);

  const loadOneOnOneMessages = async () => {
    try {
      const response = await callService(
        "user",
        `messages/${props.recipient}`,
        RequestType.GET
      );
      console.log(response);
      setUserMessages(response);
    } catch (error) {
      console.error("Failed to load messages", error);
    }
  };

  const sendMessage = async () => {
    if (!message) {
      alert("empty messages can't be sent, type something...");
      return;
    }

    try {
      await hubConnection.invoke("SendMessageToUser", recipientEmail, message);
      setMessage("");
      setUserMessages((prevMessages) => [
        ...prevMessages,
        {
          content: message,
          id: "",
          recipientId: recipientEmail,
          senderId: userContext.user.sub,
          groupId: undefined,
          sentAt: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="live-chat-container">
      <ChatHeader
        avatarUrl=""
        isOnline={onlineUsers.includes(recipientEmail)}
        username={recipientEmail}
      />
      <MessagesContainer messages={userMessages} />
      <div className="input-prompt-container">
        <InputPrompt
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatContainer;
