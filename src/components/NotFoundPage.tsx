import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  fourOFourHeader: {
    fontSize: "12rem",
  },
  msg: {
    fontSize: "2rem",
  },
}));

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        className={classes.fourOFourHeader}
      >
        404
      </Typography>
      <Typography variant="h6" align="center" className={classes.msg}>
        Page Not Found
      </Typography>
    </>
  );
};

export default NotFoundPage;
