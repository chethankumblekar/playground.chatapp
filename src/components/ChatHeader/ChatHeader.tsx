import React from "react";
import sample from "../../images/sample.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./ChatHeader.scss";

interface ChatHeaderPorps {
  connectionState: string;
  username: string;
  avatarUrl: string;
}

const ChatHeader = (props: ChatHeaderPorps) => {
  return (
    <div className="chat-header">
      <div className="recipient-info">
        <img src={sample} alt="sample" className="recipient-avatar" />
        <div className="recipient-info">
          <span className="recipient-name">{props.username}</span>
          {props.connectionState === "Connected" ? (
            <FontAwesomeIcon
              icon={faCircle}
              className="recipient-status-online"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircle}
              className="recipient-status-offline"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
