import React, { useEffect, useState } from "react";

import axiosInstance from "../../axiosInstance";
import CustomTable from "../table/Table";
import {
  addYearRange,
  handleSortField,
  sortFunction,
} from "../../utils/helpers";
import { ITheStatsPlayer, TIds } from "./theStatsTypes";

const TheStatsTable1 = (): JSX.Element | null => {
  const [data, setData] = useState([] as ITheStatsPlayer[]);
  const [sortBy, setSortBy] = useState({ field: "bat_rate_peak", asc: true });
  const [loading, setLoading] = useState(true);

  const fields = [
    "name",
    "year_range",
    "peak_pas",
    "bat_peak",
    "bat_rate_peak",
  ];

  useEffect(() => {
    const playerIds: TIds = [7496, 176];
    axiosInstance.get("career-batting-leaders").then((res) => {
      const playerArr = addYearRange(
        res.data.filter((player: ITheStatsPlayer) => {
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
    <CustomTable
      fields={fields}
      rows={data}
      hiLight={sortBy.field}
      indexed={false}
      handleSortField={handleSortField(sortBy, setSortBy)}
    />
  );
};

export default TheStatsTable1;
