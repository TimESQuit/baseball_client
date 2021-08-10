import React from "react";
import { Button, makeStyles, createStyles } from "@material-ui/core";
import SettingsBrightnessOutlinedIcon from "@material-ui/icons/SettingsBrightnessOutlined";

import { useDarkContext } from "../../styles/CustomThemeProvider";

const useStyles = makeStyles((theme) =>
  createStyles({
    darkModeIcon: {
      color: theme.palette.text.secondary,
    },
  })
);

const DarkModeButton = () => {
  const classes = useStyles();
  const [isDark, setIsDark] = useDarkContext();

  const toggleDarkMode = () => {
    setIsDark((prevState: boolean) => !prevState);
  };

  return (
    <Button onClick={toggleDarkMode}>
      <SettingsBrightnessOutlinedIcon
        fontSize="large"
        className={classes.darkModeIcon}
      />
    </Button>
  );
};

export default DarkModeButton;
