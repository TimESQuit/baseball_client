import { Link, withStyles } from "@material-ui/core";

const StyledLink = withStyles((theme) => ({
  root: {
    color:
      theme.palette.type === "dark"
        ? theme.palette.secondary.light
        : theme.palette.primary.main,
  },
}))(Link);

export default StyledLink;
