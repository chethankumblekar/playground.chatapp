import React from "react";
import sample from "../../images/sample.jpg";
import "./RecentChats.scss";

const RecentChats = () => {
  return (
    <div className="recent-chats">
      <div className="profile">
        <img src={sample} alt="sample" className="profile-image" />
        <div className="profile-name">Chethan Kumblekar</div>
      </div>
      <div className="profile">
        <img src={sample} alt="sample" className="profile-image" />
        <div className="profile-name">Chethan</div>
      </div>
      <div className="profile">
        <img src={sample} alt="sample" className="profile-image" />
        <div className="profile-name">Chethan</div>
      </div>
      <div className="profile">
        <img src={sample} alt="sample" className="profile-image" />
        <div className="profile-name">Chethan</div>
      </div>
      <div className="profile">
        <img src={sample} alt="sample" className="profile-image" />
        <div className="profile-name">Chethan</div>
      </div>
      <div className="profile">
        <img src={sample} alt="sample" className="profile-image" />
        <div className="profile-name">Chethan</div>
      </div>
    </div>
  );
};

export default RecentChats;
