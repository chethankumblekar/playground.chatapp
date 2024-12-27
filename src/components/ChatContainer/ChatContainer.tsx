import "./ChatContainer.scss";
import MessagesContainer from "../MessagesContainer/MessagesContainer";
import ChatHeader from "../ChatHeader/ChatHeader";
import InputPrompt from "../InputPromt/InputPrompt";
import Chat from "./Chat";

const ChatContainer = () => {
  return (
    <div className="live-chat-container">
      <ChatHeader />
      <Chat />
      {/* <MessagesContainer />
      <InputPrompt /> */}
    </div>
  );
};

export default ChatContainer;
