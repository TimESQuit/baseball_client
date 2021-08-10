import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

import axiosInstance from "../../axiosInstance";
import CustomTable from "../table/Table";
import {
  addYearRange,
  handleSortField,
  sortFunction,
} from "../../utils/helpers";
import { batLeaderFields } from "../statHeaders";

interface IHomePlayer {
  [key: string]: string | number | null;
}
type TPlayerId = string | number;
type TIds = TPlayerId[];

const HomeTable = (): JSX.Element | null => {
  const [data, setData] = useState([] as IHomePlayer[]);
  const [sortBy, setSortBy] = useState({ field: "bat_rate_peak", asc: true });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playerIds: TIds = [8681, 7456, 3569, 3140];
    axiosInstance.get("career-batting-leaders").then((res) => {
      const playerArr = addYearRange(
        res.data.filter((player: IHomePlayer) => {
          if (player.id) {
            return playerIds.includes(player.id);
          }
          return false;
        })
      );
      setData(playerArr);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const sortedData = data.sort(sortFunction(sortBy.field, sortBy.asc));
    setData(sortedData);
  }, [sortBy]);

  if (loading) return null;

  return (
    <Container maxWidth="xl">
      <CustomTable
        fields={batLeaderFields}
        rows={data}
        hiLight={sortBy.field}
        indexed={false}
        handleSortField={handleSortField(sortBy, setSortBy)}
      />
    </Container>
  );
};

export default HomeTable;
