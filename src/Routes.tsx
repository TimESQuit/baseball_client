import React from "react";
import { Route } from "react-router-dom";

import PlayerDetail from "./components/playerDetail/PlayerDetail";
import PlayerSearch from "./components/playerSearch/PlayerSearch";
import Leaders from "./components/leaders/Leaders";
import Home from "./components/home/Home";
import TheStats from "./components/theStats/TheStats";
import { IPage, IPageInfo, DrawerPage } from "./RouteTypes";

// Single source of all distinct pages/routes in App.
const pages: IPage[] = [
  {
    name: "playerSearch",
    sideBarName: "Player Search",
    exact: false,
    path: "/players/search",
    component: () => <PlayerSearch />,
  },
  {
    name: "activeBatLeaders",
    sideBarName: "Active",
    path: "/active-batting-leaders",
    component: () => <Leaders career={false} batting={true} />,
    leaders: {
      subType: "batting",
      current: true,
    },
  },
  {
    name: "careerBatLeaders",
    sideBarName: "Career",
    path: "/career-batting-leaders",
    component: () => <Leaders career={true} batting={true} />,
    leaders: {
      subType: "batting",
      current: false,
    },
  },
  {
    name: "activePitLeaders",
    sideBarName: "Active",
    path: "/active-pitching-leaders",
    component: () => <Leaders career={false} batting={false} />,
    leaders: {
      subType: "pitching",
      current: true,
    },
  },
  {
    name: "careerPitLeaders",
    sideBarName: "Career",
    path: "/career-pitching-leaders",
    component: () => <Leaders career={true} batting={false} />,
    leaders: {
      subType: "pitching",
      current: false,
    },
  },
  { name: "players", path: "/players/:id", component: () => <PlayerDetail /> },
  {
    name: "theStats",
    sideBarName: "The Stats",
    path: "/the-stats",
    component: () => <TheStats />,
  },
  {
    name: "home",
    sideBarName: "Home",
    exact: true,
    path: "/",
    component: () => <Home />,
  },
];

// Function used in App.tsx along with page objects in 'pages' above.
// Tried creating a map here and importing it in App.tsx, but didn't work.
const RouteFunc = (route: IPage) => {
  return (
    <Route
      path={route.path}
      exact={route.exact ? route.exact : false}
      render={(props) => <route.component {...props} />}
    />
  );
};

const pagesInfo = pages.reduce<IPageInfo>((obj, page) => {
  return Object.assign(obj, {
    [page.name]: { name: page.sideBarName, path: page.path },
  });
}, {});

// Pages/routes for hamburger menu. Does not include players/:id or players/search
const drawerPages: DrawerPage[] = [
  { ...pagesInfo.home },
  { ...pagesInfo.theStats },
  {
    name: "Leaderboards",
    items: [
      {
        name: "Batting",
        items: [
          { ...pagesInfo.careerBatLeaders },
          { ...pagesInfo.activeBatLeaders },
        ],
      },
      {
        name: "Pitching",
        items: [
          { ...pagesInfo.careerPitLeaders },
          { ...pagesInfo.activePitLeaders },
        ],
      },
    ],
  },
];

export { pages, RouteFunc, drawerPages };
