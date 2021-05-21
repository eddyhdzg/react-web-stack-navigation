import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { categories } from "../../constants/index";
import useStyles from "./routingExample.jss";

export interface MatchParams {
  sectionId: string;
}

const Category = () => {
  const match = useRouteMatch<MatchParams>();
  const breadCrumbs = useBreadcrumbs();
  const classes = useStyles();

  const category = categories.find(
    (category) => match.params.sectionId === category.id
  );

  return (
    <>
      {match.isExact && (
        <>
          {breadCrumbs.length >= 2 && (
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={breadCrumbs[breadCrumbs.length - 2].href}
            >
              Back
            </Button>
          )}

          <Typography variant="h4">{category?.title}</Typography>

          <Typography variant="subtitle2" gutterBottom color="textSecondary">
            Level {breadCrumbs.length - 1}
          </Typography>

          <div className={classes.routingExample_list}>
            {category?.subcategories.map((subCategoryId) => {
              return (
                <Button
                  key={subCategoryId}
                  component={Link}
                  color="primary"
                  to={`${match.url}/${subCategoryId}`}
                >
                  {subCategoryId}
                </Button>
              );
            })}
          </div>

          {!category?.subcategories.length && <h1>End</h1>}
        </>
      )}

      <Switch>
        <Route path={`${match.path}/:sectionId`} component={Category} />
      </Switch>
    </>
  );
};

const RoutingExample = () => {
  return (
    <Switch>
      <Route path={`/:sectionId`} component={Category} />
    </Switch>
  );
};

export default RoutingExample;
