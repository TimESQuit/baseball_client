import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Container,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Helmet } from "react-helmet-async";

import axiosInstance from "../../axiosInstance";
import PlayerDetailHeader from "./PlayerDetailHeader";
import Table from "../table/Table";
import { batFields, pitFields } from "../statHeaders";
import { handleSortField, sortFunction } from "../../utils/helpers";
import { IPlayerDetailData, IPlayerDetailStats } from "./playerTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playerContainer: {
      maxWidth: "1500px",
    },
    playerName: {
      padding: theme.spacing(3, 0),
    },
  })
);

interface IParamType {
  id: string;
}

const PlayerDetail = (): JSX.Element | null => {
  const classes = useStyles();
  const { id } = useParams<IParamType>();
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState({} as IPlayerDetailData);
  const [showBat, setShowBat] = useState(true);
  const [stats, setStats] = useState([] as IPlayerDetailStats);
  const [sortBy, setSortBy] = useState({ field: "year", asc: true });

  const handleShowStatType = (showingBat: boolean) => {
    setShowBat(showingBat);
  };

  useEffect(() => {
    axiosInstance.get(`players/${id}/`).then((res) => {
      setPlayer(res.data);
      setShowBat(Boolean(res.data.default_batting));
      setStats(
        res.data.default_batting
          ? res.data.batting_stats
          : res.data.pitching_stats
      );
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    if (!loading) {
      const newStats = showBat ? player.batting_stats : player.pitching_stats;
      setStats([...newStats].sort(sortFunction(sortBy.field, sortBy.asc)));
    }
  }, [player, showBat, sortBy, loading]);

  if (loading) return null;

  return (
    <Container className={classes.playerContainer}>
      <Helmet>
        <title>{player.name}</title>
      </Helmet>
      <Typography variant="h4" align="center" className={classes.playerName}>
        {player.name}
      </Typography>
      <PlayerDetailHeader
        player={player}
        showBat={showBat}
        handleShowStatType={handleShowStatType}
      />
      <Table
        fields={showBat ? batFields : pitFields}
        rows={stats}
        handleSortField={handleSortField(sortBy, setSortBy)}
        hiLight={sortBy.field}
        indexed={false}
      />
    </Container>
  );
};

export default PlayerDetail;
