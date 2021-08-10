import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { batJaws, pitJaws } from "../statHeaders";
import { IPlayerDetailHeaderProps } from "./playerTypes";

const useStyles = makeStyles((theme) => ({
  outerGrid: {
    marginBottom: theme.spacing(2),
  },
  innerGrid: {
    display: "flex",
    alignItems: "center",
  },
  buttonGroup: {
    width: "100%",
    height: "75%",
    marginBottom: theme.spacing(2),
  },
  button: {
    width: "50%",
  },
  centerGrid: {
    textAlign: "center",
  },
}));

const PlayerDetailHeader = ({
  player,
  showBat,
  handleShowStatType,
}: IPlayerDetailHeaderProps) => {
  const classes = useStyles();
  const [jaws, setJaws] = useState(showBat ? batJaws : pitJaws);

  useEffect(() => {
    setJaws(showBat ? batJaws : pitJaws);
  }, [showBat]);

  return (
    <>
      <Grid container className={classes.outerGrid}>
        <Grid item xs={12} md={3} className={classes.innerGrid}>
          <ButtonGroup className={classes.buttonGroup}>
            <Button
              color={showBat ? "primary" : "default"}
              className={classes.button}
              size="small"
              variant={showBat ? "contained" : "outlined"}
              onClick={() => handleShowStatType(true)}
            >
              Batting
            </Button>
            <Button
              color={showBat ? "default" : "primary"}
              className={classes.button}
              size="small"
              variant={showBat ? "outlined" : "contained"}
              onClick={() => handleShowStatType(false)}
            >
              Pitching
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid container item xs={12} md={6}>
          {["fJAWS", "fJAWSr"].map((title, i) => {
            return (
              <Grid item xs={6} key={i} className={classes.centerGrid}>
                <Typography component="span" variant="body1">
                  <Box fontWeight={700}>{title}</Box>
                </Typography>
              </Grid>
            );
          })}
          {[jaws.slice(0, 3), jaws.slice(3)].map((stat, i) => (
            <Grid item xs={6} key={i} className={classes.centerGrid}>
              {player[stat[0]]}/{player[stat[1]]}/{player[stat[2]]}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default PlayerDetailHeader;
