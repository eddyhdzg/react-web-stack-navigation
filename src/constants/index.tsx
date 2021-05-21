import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";

export const routes = [
  {
    label: "Home",
    route: "/home",
    icon: <HomeRoundedIcon />,
  },
  {
    label: "Portfolio",
    route: "/portfolio",
    icon: <MenuBookRoundedIcon />,
  },
  {
    label: "Trading",
    route: "/trading",
    icon: <ShowChartRoundedIcon />,
  },
];

export interface ICategory {
  id: string;
  title: string;
  subcategories: string[];
}

// Convention
// Section + Digit + Letter
export const categories: ICategory[] = [
  // Home
  // Level 1
  { id: "home", title: "Home", subcategories: ["home-0", "home-1", "home-2"] },
  // Level 2
  { id: "home-0", title: "Home 0", subcategories: ["home-0-A"] },
  { id: "home-1", title: "Home 1", subcategories: ["home-1-A"] },
  { id: "home-2", title: "Home 2", subcategories: ["home-2-A"] },
  // Level 3
  { id: "home-0-A", title: "Home 0 A", subcategories: [] },
  { id: "home-1-A", title: "Home 1 A", subcategories: [] },
  { id: "home-2-A", title: "Home 2 A", subcategories: [] },

  // Portfolio
  // Level 1
  {
    id: "portfolio",
    title: "Portfolio",
    subcategories: ["portfolio-0", "portfolio-1"],
  },
  // Level 2
  { id: "portfolio-0", title: "Portfolio 0", subcategories: ["portfolio-0-A"] },
  { id: "portfolio-1", title: "Portfolio 1", subcategories: ["portfolio-1-A"] },
  // Level 3
  { id: "portfolio-0-A", title: "Portfolio 0 A", subcategories: [] },
  { id: "portfolio-1-A", title: "Portfolio 1 A", subcategories: [] },

  // Trading
  // Level 1
  {
    id: "trading",
    title: "Trading",
    subcategories: ["trading-0", "trading-1"],
  },
  // Level 2
  { id: "trading-0", title: "Trading 0", subcategories: [] },
];
