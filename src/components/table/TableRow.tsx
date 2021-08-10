import { TableRow, withStyles, createStyles } from "@material-ui/core";

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      "&:hover": {
        backgroundColor: theme.palette.action.focus,
      },
    },
  })
)(TableRow);

export default StyledTableRow;
