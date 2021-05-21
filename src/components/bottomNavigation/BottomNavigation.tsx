import { useLocation, NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import useStyles from "./bottomNavigation.jss";
import { routes } from "../../constants/index";
import { useContext } from "react";
import { RouterMemoContext } from "../RouterMemoContext";
import { TBaseRoutes } from "../../types";

export default function BottomAppBar() {
  const classes = useStyles();
  const { pathname } = useLocation();
  const routerMemo = useContext(RouterMemoContext);

  const getMemoryRoute = (baseRoute: TBaseRoutes) => {
    if (pathname.includes(baseRoute)) {
      return pathname.substring(0, pathname.lastIndexOf("/")) || baseRoute;
    }
    return routerMemo[baseRoute];
  };

  return (
    <BottomNavigation value={pathname} className={classes.appBar}>
      {routes.map(({ label, route, icon }) => (
        <BottomNavigationAction
          key={route}
          label={label}
          value={route}
          icon={icon}
          component={NavLink}
          activeClassName="Mui-selected"
          to={getMemoryRoute(route as TBaseRoutes)}
        />
      ))}
    </BottomNavigation>
  );
}
