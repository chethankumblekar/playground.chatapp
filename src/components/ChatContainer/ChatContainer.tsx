import "./ChatContainer.scss";
import MessagesContainer from "../MessagesContainer/MessagesContainer";
import ChatHeader from "../ChatHeader/ChatHeader";
import InputPrompt from "../InputPromt/InputPrompt";

const ChatContainer = () => {
  return (
    <div className="live-chat-container">
      <ChatHeader />
      <MessagesContainer />
      <InputPrompt />
    </div>
  );
};

export default ChatContainer;
