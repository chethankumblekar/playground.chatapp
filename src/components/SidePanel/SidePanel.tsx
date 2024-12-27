import profileimage from "../../images/user.png";
import "./SidePanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faVideo,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../common/model";
import MenuCard from "../Menu/MenuCard";
import React from "react";
import { AuthContext } from "../../useContext/authProvider";
import { useNavigate } from "react-router-dom";
import { Menu as MenuList, MenuItem } from "@mui/material";

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const userContext = React.useContext(AuthContext);
  const user = userContext.user;
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const RenderMenu = () => {
    return (
      <MenuList
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => navigate("/login")}>Profile</MenuItem>
        <MenuItem onClick={() => navigate("/profile")}>My account</MenuItem>
      </MenuList>
    );
  };

  return (
    <div className="side-panel">
      <div className="user-image" onClick={handleProfileMenuOpen}>
        <img
          src={
            user.isAuthenticated && user.picture ? user.picture : profileimage
          }
          alt="user"
        />
      </div>
      <div>
        <RenderMenu />
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
