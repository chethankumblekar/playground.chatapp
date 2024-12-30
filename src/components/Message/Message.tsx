import React from "react";
import "./Message.scss";
import { getDate } from "../../common/helper";

interface MessageProps {
  content: string;
  time: string;
}
const Message = (props: MessageProps) => {
  return (
    <div className="message">
      <div className="message-content">{props.content}</div>
      <div className="message-time">{getDate(props.time)}</div>
    </div>
  );
};

export default Message;
