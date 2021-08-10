import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { Helmet } from "react-helmet-async";

import axiosInstance from "../../axiosInstance";
import useQuery from "../../utils/useQuery";
import CustomTable from "../table/Table";
import { sortFunction, handleSortField } from "../../utils/helpers";
import { searchFields } from "../statHeaders";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchTitle: {
      padding: theme.spacing(2, 0),
    },
  })
);

interface ISearchResults {
  [key: string]: string | number | null;
}

const PlayerSearch = (): JSX.Element | null => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([] as ISearchResults[]);
  const [sortBy, setSortBy] = useState({ field: "last_year", asc: false });
  const [sortedResults, setSortedResults] = useState([] as ISearchResults[]);
  const [title, setTitle] = useState("");
  const query = useQuery().get("q");

  useEffect(() => {
    axiosInstance
      .get(`players/search`, { params: { q: query } })
      .then((res) => {
        setSearchResults(res.data);
        setTitle(
          `Players containing "${query}" - ${res.data.length} ${
            res.data.length === 1 ? "result" : "results"
          } found:`
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  useEffect(() => {
    if (!loading) {
      setSortedResults(
        [...searchResults].sort(sortFunction(sortBy.field, sortBy.asc))
      );
    }
  }, [loading, sortBy]);

  if (loading) return null;

  return (
    <Container maxWidth="lg">
      <Helmet>
        <title>{`${query} - Search Results`}</title>
      </Helmet>
      <Typography variant="h6" align="center" className={classes.searchTitle}>
        {title}
      </Typography>
      <CustomTable
        fields={Object.keys(searchFields)}
        fieldTitles={searchFields}
        rows={sortedResults}
        hiLight={sortBy.field}
        indexed={true}
        handleSortField={handleSortField(sortBy, setSortBy, false)}
      />
    </Container>
  );
};

export default PlayerSearch;
