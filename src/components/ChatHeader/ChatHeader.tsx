import React from "react";
import sample from "../../images/sample.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./ChatHeader.scss";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="recipient-info">
        <img src={sample} alt="sample" className="recipient-avatar" />
        <div className="recipient-info">
          <span className="recipient-name">Chethan</span>
          <FontAwesomeIcon icon={faCircle} className="recipient-status" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
