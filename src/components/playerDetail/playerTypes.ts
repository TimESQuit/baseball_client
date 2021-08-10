interface IPlayerYear {
  [key: string]: number | string | null;
}

interface IPlayerBase {
  name: string;
  default_batting: number;
  bat_career: number;
  bat_peak: number;
  bat_avg: number;
  career_pas: number;
  peak_pas: number;
  bat_rate_career: number;
  bat_rate_peak: number;
  bat_rate_avg: number;
  pit_career: number;
  pit_peak: number;
  pit_avg: number;
  pit_rate_career: number;
  pit_rate_peak: number;
  pit_rate_avg: number;
  career_ip: number;
  peak_ip: number;
}

interface IPlayerCareer extends IPlayerBase {
  first_year: number;
  last_year: number;
  id: number;
}

interface IPlayerDetailData extends IPlayerBase {
  batting_stats: IPlayerYear[];
  pitching_stats: IPlayerYear[];
}

type IPlayerDetailStats = IPlayerYear[];

interface IPlayerDetailHeaderProps {
  player: IPlayerDetailData;
  showBat: boolean;
  handleShowStatType: Function;
}

interface IPlayerSearch {
  id: number;
  name: string;
  first_year: number;
  last_year: number;
}

export type {
  IPlayerYear,
  IPlayerCareer,
  IPlayerDetailData,
  IPlayerDetailHeaderProps,
  IPlayerDetailStats,
  IPlayerSearch,
};
