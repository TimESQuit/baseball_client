import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import StyledTableCell from "./TableCell";
import StyledTableRow from "./TableRow";
import { ITableBodyProps, ICellContent } from "./tableTypes";

const useStyles = makeStyles((theme) => ({
  hiLightedCell: {
    backgroundColor: theme.palette.primary.light,
  },
  cellWithLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    whiteSpace: "nowrap",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const CustomTableBody = ({
  rows,
  fields,
  hiLight,
  indexed,
  indexStart,
}: ITableBodyProps) => {
  const classes = useStyles();

  const CellContent = ({ row, field, index, hiLight }: ICellContent) => {
    let content;
    if (field === "name") {
      content = (
        <Link to={`/players/${row.id}`} className={classes.cellWithLink}>
          {row[field]}
        </Link>
      );
    } else if (field === index) {
      content = indexStart + index;
    } else {
      content = row[field];
    }
    return (
      <StyledTableCell
        style={{ textAlign: "center" }}
        className={field === hiLight ? classes.hiLightedCell : ""}
      >
        {content}
      </StyledTableCell>
    );
  };

  return (
    <>
      {rows.map((row, index) => {
        return (
          <StyledTableRow key={row.id}>
            {(indexed ? [index, ...fields] : fields).map((field) => {
              return (
                <CellContent
                  row={row}
                  field={field}
                  index={index}
                  hiLight={hiLight}
                  key={`${field}-${row.id}`}
                />
              );
            })}
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default CustomTableBody;
