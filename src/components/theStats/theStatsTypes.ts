interface ITheStatsPlayer {
  [key: string]: string | number | null;
}

type TPlayerId = string | number;
type TIds = TPlayerId[];

interface IIdsAndYears {
  [key: string]: string | number;
}

export type { ITheStatsPlayer, TIds, IIdsAndYears };
