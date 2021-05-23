import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { categories } from "../../constants/index";
import { MatchParams } from "../../types";
import RouteList from "../routeList/RouteList";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Category = () => {
  const match = useRouteMatch<MatchParams>();
  const breadCrumbs = useBreadcrumbs();
  const category = categories.find(
    (category) => match.params.sectionId === category.id
  );

  return (
    <>
      {match.isExact && (
        <RouteList>
          {breadCrumbs.length >= 2 && (
            <ListItem
              button
              component={Link}
              to={breadCrumbs[breadCrumbs.length - 2].href}
            >
              <ListItemIcon>
                <ArrowBackIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          )}

          {category?.subcategories.map((subCategoryId) => {
            return (
              <RouteList.RouteListLink
                key={subCategoryId}
                to={`${match.url}/${subCategoryId}`}
                text={subCategoryId}
              />
            );
          })}
        </RouteList>
      )}

      <Switch>
        <Route path={`${match.path}/:sectionId`} component={Category} />
      </Switch>
    </>
  );
};

const RoutingExample = () => {
  return (
    <>
      <Switch>
        <Route path={`/:sectionId`} component={Category} />
      </Switch>
    </>
  );
};

export default RoutingExample;
