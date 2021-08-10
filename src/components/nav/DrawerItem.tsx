import React, { useState } from "react";
import {
  makeStyles,
  createStyles,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
} from "@material-ui/core";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

import DrawerItemLink from "./DrawerItemLink";
import { DrawerPage } from "../../routeTypes";
import { IMenuItem, ISubMenu } from "../../routeTypes";

const useStyles = makeStyles((theme) =>
  createStyles({
    navList: {
      padding: 0,
    },
    navItem: {
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
    navItemText: {
      padding: theme.spacing(0, 3),
    },
    navItemTextPrimary: {
      fontWeight: 500,
    },
  })
);

const DrawerItem = ({
  item,
  handleShowDrawer,
}: {
  item: DrawerPage;
  handleShowDrawer: (status: boolean) => void;
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleSubMenu = () => {
    setOpen((prev: boolean) => !prev);
  };

  const TextContent = (
    <ListItemText
      primary={item.name}
      classes={{ primary: classes.navItemTextPrimary }}
      className={classes.navItemText}
    />
  );

  if ("items" in item) {
    // Returns a SubMenu with SubItems.
    return (
      <>
        <ListItem button onClick={handleSubMenu} className={classes.navItem}>
          {TextContent}
          {!open && <IconExpandMore />}
          {open && <IconExpandLess />}
        </ListItem>
        <Collapse in={open} unmountOnExit>
          <Divider variant="middle" />
          <List className={classes.navList}>
            {item.items.map((subItem: ISubMenu | IMenuItem, idx: number) => (
              <DrawerItem
                item={subItem}
                handleShowDrawer={handleShowDrawer}
                key={idx}
              />
            ))}
          </List>
        </Collapse>
      </>
    );
  } else {
    // Returns a navigation link.
    return (
      <DrawerItemLink
        path={item.path}
        handleShowDrawer={handleShowDrawer}
        propClass={classes.navItem}
      >
        {TextContent}
      </DrawerItemLink>
    );
  }
};

export default DrawerItem;
