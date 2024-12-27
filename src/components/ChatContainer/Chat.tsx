import React, { useState, useEffect } from "react";
import useSignalR from "../../signalR/useSignalR";

interface Message {
  sender: string;
  text: string;
}

const Chat: React.FC = () => {
  const { hubConnection, connectionState } = useSignalR();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [recipientEmail, setRecipientEmail] = useState<string>("");

  useEffect(() => {
    if (hubConnection) {
      // Listen for incoming messages
      hubConnection.on(
        "ReceiveMessage",
        (senderEmail: string, message: string) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: senderEmail, text: message },
          ]);
        }
      );
    }

    return () => {
      hubConnection.off("ReceiveMessage");
    };
  }, [hubConnection]);

  const sendMessage = async () => {
    if (!recipientEmail || !message) {
      alert("Recipient email and message are required.");
      return;
    }

    try {
      await hubConnection.invoke("SendMessageToUser", recipientEmail, message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", text: message },
      ]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <p>Connection Status: {connectionState}</p>

      <div>
        <input
          type="text"
          placeholder="Recipient Email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
        <textarea
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>{msg.sender}:</strong> {msg.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;
