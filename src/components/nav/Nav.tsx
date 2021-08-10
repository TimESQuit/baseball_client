import React, { useState } from "react";
import {
  AppBar,
  ClickAwayListener,
  Drawer,
  Divider,
  IconButton,
  List,
  Toolbar,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import DarkModeButton from "./DarkModeButton";
import NavSearch from "./NavSearch";
import { drawerPages } from "../../Routes";
import DrawerItem from "./DrawerItem";
import { DrawerPage } from "../../RouteTypes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      padding: "0 15vw",
      [theme.breakpoints.between("sm", "lg")]: {
        padding: "0 7vw",
      },
      [theme.breakpoints.only("xs")]: {
        padding: "0",
      },
      display: "flex",
      justifyContent: "space-between",
    },
    menuIcon: {
      color: theme.palette.primary.contrastText,
    },
    drawerPaper: {
      whiteSpace: "nowrap",
      width: drawerWidth,
      padding: 0,
    },
    drawerChevron: {
      display: "flex",
      justifyContent: "flex-end",
      padding: theme.spacing(1, 2),
    },
    navList: {
      padding: 0,
    },
  })
);

const Nav = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleShowDrawer = (status: boolean) => {
    setOpen(status);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={() => handleShowDrawer(true)}>
            <MenuIcon fontSize="large" className={classes.menuIcon} />
          </IconButton>
          <Drawer
            variant="temporary"
            open={open}
            classes={{ paper: classes.drawerPaper }}
          >
            <ClickAwayListener onClickAway={() => handleShowDrawer(false)}>
              <div>
                <div className={classes.drawerChevron}>
                  <IconButton onClick={() => handleShowDrawer(false)}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider variant="middle" />
                <List component="nav" className={classes.navList}>
                  {drawerPages.map((page: DrawerPage, idx: number) => (
                    <DrawerItem
                      item={page}
                      handleShowDrawer={handleShowDrawer}
                      key={idx}
                    />
                  ))}
                </List>
              </div>
            </ClickAwayListener>
          </Drawer>
          <NavSearch />
          <DarkModeButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
