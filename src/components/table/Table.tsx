import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
} from "@material-ui/core";

import usePageAndSize from "../../utils/usePageAndSize";
import useQuery from "../../utils/useQuery";
import CustomTableBody from "./TableBody";
import CustomTableHeader from "./TableHeader";
import { allApiFields } from "../statHeaders";
import { ITableProps } from "./tableTypes";

const useStyles = makeStyles(() => ({
  pagination: {
    display: "flex",
    justifyContent: "flex-start",
  },
  tableContainer: {
    maxHeight: "calc(95vh - 155px)",
  },
}));

const pageSizeChoices = [10, 25, 50, 100];

const CustomTable = ({
  fields,
  rows,
  handleSortField,
  hiLight = null,
  indexed = true,
  fieldTitles = { ...allApiFields },
}: ITableProps) => {
  const classes = useStyles();
  const [page, rowsPerPage] = usePageAndSize(rows.length, pageSizeChoices);
  const location = useLocation();
  const qParam = useQuery().get("q");
  const qString = qParam ? `q=${qParam}&` : "";
  let history = useHistory();

  const handleChangePage = (event: unknown, newPage: number) => {
    history.push({
      pathname: location.pathname,
      search: `?${qString}page=${newPage}&size=${rowsPerPage}`,
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    history.push({
      pathname: location.pathname,
      search: `?${qString}page=0&size=${+event.target.value}`,
    });
  };

  const paginator = (
    <TablePagination
      component="div"
      rowsPerPageOptions={pageSizeChoices}
      rowsPerPage={rowsPerPage}
      count={rows.length}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      className={classes.pagination}
    />
  );

  return (
    <Paper variant="outlined">
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader size="small">
          <TableHead>
            <CustomTableHeader
              fields={fields}
              indexed={indexed}
              handleSortField={handleSortField}
              fieldTitles={fieldTitles}
            />
          </TableHead>
          <TableBody>
            <CustomTableBody
              rows={
                indexed
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
              }
              fields={fields}
              indexed={indexed}
              hiLight={hiLight}
              indexStart={page * rowsPerPage + 1}
            />
          </TableBody>
        </Table>
        {indexed ? paginator : null}
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
