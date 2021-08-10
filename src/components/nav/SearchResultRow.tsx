import React from "react";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { IPlayerSearch } from "../playerDetail/playerTypes";

const useStyles = makeStyles((theme) =>
  createStyles({
    dropDownRow: {
      width: "100%",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
    dropDownLink: {
      textDecoration: "none",
      color: theme.palette.text.primary,
      disiplay: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    innerLinkWrapper: {
      display: "flex",
      justifyContent: "space-between",
    },
    nameSpan: {
      paddingRight: theme.spacing(2),
    },
  })
);

const SearchResultRow = ({
  player,
  handleClose,
}: {
  player: IPlayerSearch;
  handleClose: (event: React.MouseEvent<EventTarget>) => void;
}) => {
  const classes = useStyles();

  return (
    <MenuItem className={classes.dropDownRow}>
      <Link
        to={`/players/${player.id}`}
        onClick={handleClose}
        className={classes.dropDownLink}
      >
        <div className={classes.innerLinkWrapper}>
          <span className={classes.nameSpan}>{player.name}</span>
          <span>
            {player.first_year} - {player.last_year}
          </span>
        </div>
      </Link>
    </MenuItem>
  );
};

export default SearchResultRow;
