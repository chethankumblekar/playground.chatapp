import user from "../../images/user.png";
import "./SidePanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faVideo,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../common/model";
import MenuCard from "../Menu/MenuCard";

const messageIcon = (
  <FontAwesomeIcon className="message-icon" icon={faMessage} />
);
const videoIcon = <FontAwesomeIcon className="video-icon" icon={faVideo} />;
const folderIcon = <FontAwesomeIcon className="folder-icon" icon={faFolder} />;

const Menus: Menu[] = [
  {
    icon: messageIcon,
    title: "Chats",
    path: "/chats",
  },
  {
    icon: videoIcon,
    title: "Video Chats",
    path: "/video-chats",
  },
  {
    icon: folderIcon,
    title: "folder",
    path: "/folder",
  },
];

const SidePanel = () => {
  return (
    <div className="side-panel">
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
      <div>
        <div className="menu-container">
          {Menus.map((menu) => {
            return <MenuCard menu={menu} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
