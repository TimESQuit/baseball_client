import React, { useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Helmet } from "react-helmet-async";

import axiosInstance from "../../axiosInstance";
import {
  addYearRange,
  handleSortField,
  sortFunction,
} from "../../utils/helpers";
import CustomTable from "../table/Table";
import { batLeaderFields, pitLeaderFields } from "../statHeaders";
import { ILeaderData } from "./leadersTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leaderContainer: {
      maxWidth: "1500px",
    },
    leaderTitle: {
      padding: theme.spacing(3, 0),
    },
  })
);

const Leaders = ({
  career,
  batting,
}: {
  career: boolean;
  batting: boolean;
}): JSX.Element | null => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({} as ILeaderData[]);
  const [sortedData, setSortedData] = useState({} as ILeaderData[]);
  const [sortBy, setSortBy] = useState({
    field: batting ? "bat_career" : "pit_career",
    asc: false,
  });
  const title = `${career ? "All-Time" : "Active"}
  ${batting ? "Batting" : "Pitching"} Leaders`;

  useEffect(() => {
    axiosInstance
      .get(
        `${career ? "career" : "active"}-${
          batting ? "batting" : "pitching"
        }-leaders`
      )
      .then((res) => {
        setData(addYearRange(res.data));
        setSortedData(addYearRange(res.data));
        setLoading(false);
      });
  }, [batting, career]);

  useEffect(() => {
    if (!loading) {
      setSortedData([...data].sort(sortFunction(sortBy.field, sortBy.asc)));
    }
  }, [data, sortBy, loading]);

  if (loading) return null;

  return (
    <Container className={classes.leaderContainer}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Typography variant="h4" align="center" className={classes.leaderTitle}>
        {title}
      </Typography>
      <CustomTable
        fields={batting ? batLeaderFields : pitLeaderFields}
        rows={sortedData}
        hiLight={sortBy.field}
        indexed={true}
        handleSortField={handleSortField(sortBy, setSortBy)}
      />
    </Container>
  );
};

export default Leaders;
