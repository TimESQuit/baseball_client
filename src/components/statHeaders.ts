// Keys in allApiFields exactly match the api key names.
// allApiFields & nonApiFields are used as the one place to store representations of fields/columns
// to the end-user and is done to keep public field names consistent.

const allApiFields = {
  year: "Year",
  team: "Team",
  g: "G",
  pa: "PA",
  wrc_plus: "wRC+",
  bsr: "BsR",
  off: "Off",
  def_field: "Def",
  war: "WAR",
  war_per_600: "WARr",
  gs: "GS",
  ip: "IP",
  k_per_9: "K/9",
  bb_per_9: "BB/9",
  era: "ERA",
  fip: "FIP",
  war_per_200: "WARr",
  name: "Name",
  first_year: "First Year",
  last_year: "Last Year",
  year_range: "Years Active",
  bat_career: "WAR",
  bat_peak: "WAR7",
  bat_avg: "fJAWS",
  career_pas: "PA",
  peak_pas: "PA7",
  bat_rate_career: "WARr",
  bat_rate_peak: "WAR7r",
  bat_rate_avg: "fJAWSr",
  pit_career: "WAR",
  pit_peak: "WAR7",
  pit_avg: "fJAWS",
  career_ip: "IP",
  peak_ip: "IP7",
  pit_rate_career: "WARr",
  pit_rate_peak: "WAR7r",
  pit_rate_avg: "fJAWSr",
};

const nonApiFields = ["year_range"];

const batFields = [
  "year",
  "team",
  "g",
  "pa",
  "wrc_plus",
  "bsr",
  "off",
  "def_field",
  "war",
  "war_per_600",
];

const pitFields = [
  "year",
  "team",
  "g",
  "gs",
  "ip",
  "k_per_9",
  "bb_per_9",
  "era",
  "fip",
  "war",
  "war_per_200",
];

const batLeaderFields = [
  "name",
  "year_range",
  "bat_career",
  "bat_peak",
  "bat_avg",
  "career_pas",
  "peak_pas",
  "bat_rate_career",
  "bat_rate_peak",
  "bat_rate_avg",
];

const pitLeaderFields = [
  "name",
  "year_range",
  "pit_career",
  "pit_peak",
  "pit_avg",
  "career_ip",
  "peak_ip",
  "pit_rate_career",
  "pit_rate_peak",
  "pit_rate_avg",
];

const batJaws = [
  "bat_career",
  "bat_peak",
  "bat_avg",
  "bat_rate_career",
  "bat_rate_peak",
  "bat_rate_avg",
] as const;

const pitJaws = [
  "pit_career",
  "pit_peak",
  "pit_avg",
  "pit_rate_career",
  "pit_rate_peak",
  "pit_rate_avg",
] as const;

const searchFields = {
  name: "Name",
  first_year: "First Year",
  last_year: "Last Year",
  bat_career: "Batting WAR",
  pit_career: "Pitching WAR",
};

const statHeaderDescriptions = {
  bat_career: "Total career position-player WAR",
  bat_peak: "Total position-player WAR for player's 7 highest-WAR seasons",
  bat_avg: "Average of WAR & WAR7",
  career_pas: "Total career plate appearances",
  peak_pas: "Total plate appearances for player's WAR7 seasons",
  bat_rate_career: "Career rate of WAR per 600 PAs",
  bat_rate_peak: "Rate of WAR per 600 PAs for WAR7 seasons",
  bat_rate_avg: "Average of WARr & WAR7r",
  pit_career: "Total career pitching WAR",
  pit_peak: "Total pitching WAR for player's 7 highest-WAR seasons",
  pit_avg: "Average of WAR & WAR7",
  career_ip: "Total career innings pitched",
  peak_ip: "Total innings pitched for player's WAR7 seasons",
  pit_rate_career: "Career rate of WAR per 200 IP",
  pit_rate_peak: "Rate of WAR per 200 IP for player's WAR7 seasons",
  pit_rate_avg: "Average of WARr & WAR7r",
};

export {
  batFields,
  pitFields,
  batLeaderFields,
  pitLeaderFields,
  batJaws,
  pitJaws,
  allApiFields,
  nonApiFields,
  searchFields,
  statHeaderDescriptions,
};
