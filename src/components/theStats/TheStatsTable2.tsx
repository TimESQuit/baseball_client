import React, { useEffect, useState } from "react";

import axiosInstance from "../../axiosInstance";
import CustomTable from "../table/Table";
import { handleSortField, sortFunction } from "../../utils/helpers";
import { batFields } from "../statHeaders";
import { ITheStatsPlayer, IIdsAndYears } from "./theStatsTypes";

const TheStatsTable2 = (): JSX.Element | null => {
  const [data, setData] = useState([] as ITheStatsPlayer[]);
  const [sortBy, setSortBy] = useState({ field: "war_per_600", asc: false });
  const [bonds, setBonds] = useState({} as ITheStatsPlayer);
  const [harper, setHarper] = useState({} as ITheStatsPlayer);
  const [loading, setLoading] = useState(true);

  let fields = [...batFields];
  const teamIdx = fields.indexOf("team");
  fields.splice(teamIdx, 1);
  fields = ["name", ...fields];

  useEffect(() => {
    const BondsAndHarper: IIdsAndYears[] = [
      { id: 4210, year: 2003 },
      { id: 47, year: 2015 },
    ];

    for (const player of BondsAndHarper) {
      axiosInstance.get(`players/${player.id}/`).then((res) => {
        let selectYear = res.data.batting_stats.filter(
          (season: ITheStatsPlayer) => {
            if (season.year) return season.year === player.year;
            return false;
          }
        )[0];
        // selectYear's id comes from season.id which comes from batting_stats.
        // This changes "id" to the player's id and adds the name, so it can be
        // properly linked to the individual player page.
        selectYear = { ...selectYear, id: player.id, name: res.data.name };
        player.id === 4210 ? setBonds(selectYear) : setHarper(selectYear);
      });
    }
  }, []);

  useEffect(() => {
    if (bonds.year && harper.year) {
      setData([{ ...bonds }, { ...harper }]);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [bonds, harper]);

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

export default TheStatsTable2;
