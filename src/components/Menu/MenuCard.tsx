import React from "react";
import { MenuProps } from "../../common/model";
import "./MenuCard.scss";

const MenuCard = (props: MenuProps) => {
  const menu = props.menu;
  return (
    <div key={menu.title} className="menu">
      <div className="menu-icon">{menu.icon}</div>
      <div className="menu-title">{menu.title}</div>
    </div>
  );
};

export default MenuCard;
