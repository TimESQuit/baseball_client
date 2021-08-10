import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import { nonApiFields } from "../statHeaders";
import StyledTableCell from "./TableCell";
import StyledTableRow from "./TableRow";
import { ITableHeaderProps } from "./tableTypes";

const useStyles = makeStyles((theme) => ({
  cellButton: {
    textTransform: "none",
    color: theme.palette.primary.contrastText,
  },
  headerRow: {
    textAlign: "center",
  },
}));

const TableHeader = ({
  fields,
  handleSortField,
  indexed,
  fieldTitles,
}: ITableHeaderProps) => {
  const classes = useStyles();

  const HeaderCellContent = (field: string) => {
    if (field === "empty") {
      return "";
    } else if (nonApiFields.includes(field)) {
      return fieldTitles[field];
    } else {
      return (
        <Button
          onClick={() => handleSortField(field)}
          className={classes.cellButton}
        >
          {fieldTitles[field]}
        </Button>
      );
    }
  };

  return (
    <StyledTableRow>
      {(indexed ? ["empty", ...fields] : fields).map((field, index) => {
        return (
          <StyledTableCell key={index} className={classes.headerRow}>
            {HeaderCellContent(field)}
          </StyledTableCell>
        );
      })}
    </StyledTableRow>
  );
};

export default TableHeader;
