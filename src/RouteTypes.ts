interface IPage {
  name: string;
  sideBarName?: string;
  path: string;
  exact?: boolean;
  component: Function;
  leaders?: {
    subType?: "batting" | "pitching";
    current?: boolean;
  };
}

interface IPageInfo {
  [key: string]: {
    name: string;
    path: string;
  };
}

interface IMenuItem {
  name: string;
  path: string;
}

interface ISubMenu {
  name: string;
  items: IMenuItem[] | ISubMenu[];
}

type DrawerPage = ISubMenu | IMenuItem;

export type { IPage, IPageInfo, IMenuItem, ISubMenu, DrawerPage };
