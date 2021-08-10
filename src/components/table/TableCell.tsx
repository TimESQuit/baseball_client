import { TableCell, withStyles, createStyles } from "@material-ui/core";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      whiteSpace: "nowrap",
      body: {
        fontSize: 14,
      },
    },
  })
)(TableCell);

export default StyledTableCell;
