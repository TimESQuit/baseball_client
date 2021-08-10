import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";

const DrawerItemLink = ({
  path,
  handleShowDrawer,
  propClass,
  children,
}: {
  path: string;
  handleShowDrawer: (status: boolean) => void;
  propClass: string;
  children: ReactNode;
}) => {
  return (
    <ListItem
      button
      children={children}
      component={Link}
      to={path}
      onClick={() => handleShowDrawer(false)}
      className={propClass}
    />
  );
};

export default DrawerItemLink;
