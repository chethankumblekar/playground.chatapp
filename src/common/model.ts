export interface Menu {
  icon: JSX.Element;
  title: string;
  path: string;
}

export interface NavProps {
  menuItems: Menu[];
}

export interface MenuProps {
  menu: Menu;
}
