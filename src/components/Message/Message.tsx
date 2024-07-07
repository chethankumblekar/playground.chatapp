import React from "react";
import "./Message.scss";
import { getDate } from "../../common/helper";

const Message = () => {
  return (
    <div className="message">
      <div className="message-content">
        Hello World! sdfsdfdhs sdfhjdsfdsb sdfdhsfdsfhshfsf
        sdfjhedfbdsfgsdfdsbgj sdfjgddsbfdsb
      </div>
      <div className="message-time">{getDate()}</div>
    </div>
  );
};

export default Message;
