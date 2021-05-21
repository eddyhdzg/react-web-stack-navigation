import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { categories } from "../../constants/index";
import useStyles from "./routingExample.jss";
import { MatchParams } from "../../types";

const Category = () => {
  const match = useRouteMatch<MatchParams>();
  const classes = useStyles();

  const category = categories.find(
    (category) => match.params.sectionId === category.id
  );

  return (
    <>
      {match.isExact && (
        <>
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
    <>
      <Switch>
        <Route path={`/:sectionId`} component={Category} />
      </Switch>
    </>
  );
};

export default RoutingExample;
