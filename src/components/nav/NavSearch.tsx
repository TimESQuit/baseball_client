import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import SearchIcon from "@material-ui/icons/Search";
import {
  InputBase,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
} from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";

import SearchResultRow from "./SearchResultRow";
import axiosInstance from "../../axiosInstance";
import { IPlayerSearch } from "../playerDetail/playerTypes";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    maxWidth: "60%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddiing: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "20ch",
  },
  popper: {
    zIndex: 10,
  },
}));

const NavSearch = () => {
  const classes = useStyles();
  const [searchString, setSearchString] = useState("");
  const [open, setOpen] = useState(false);
  const [resultsList, setResultsList] = useState([] as IPlayerSearch[]);
  const anchorRef = useRef<HTMLButtonElement>(null);
  let history = useHistory();

  const handleUpdateSearchString = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchString(event.target.value);
  };

  const resetSearch = () => {
    setOpen(false);
    setResultsList([]);
    setSearchString("");
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    history.push({
      pathname: "/players/search",
      search: `?q=${searchString}`,
    });
    resetSearch();
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    resetSearch();
  };

  useEffect(() => {
    if (searchString.length >= 3) {
      axiosInstance
        .get("players/search", { params: { q: searchString } })
        .then((res) => {
          setResultsList(res.data.slice(0, 5));
          setOpen(true);
        });
    }
  }, [searchString]);

  return (
    <form onSubmit={handleSubmit} className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        ref={anchorRef}
        classes={{ root: classes.inputRoot, input: classes.inputInput }}
        inputProps={{ "aria-label": "search", autoComplete: "off" }}
        type="search"
        placeholder="Player Search"
        value={searchString}
        onChange={handleUpdateSearchString}
        onClick={() => setOpen((prev: boolean) => !prev)}
      />

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        className={classes.popper}
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList id="search-results-grow">
                  {resultsList
                    ? resultsList.map((player) => (
                        <SearchResultRow
                          player={player}
                          handleClose={handleClose}
                          key={player.id}
                        />
                      ))
                    : null}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </form>
  );
};

export default NavSearch;
