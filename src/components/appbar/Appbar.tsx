import {
  AppBar as MUIAppbar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "./appbar.jss";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";

export default function Appbar() {
  const classes = useStyles();
  const breadCrumbs = useBreadcrumbs();

  return (
    <MUIAppbar position="static" color="transparent">
      <Toolbar className={classes.toolbar}>
        <div className={classes.menuButtonContainer}>
          {breadCrumbs.length >= 2 && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              component={Link}
              to={breadCrumbs[breadCrumbs.length - 2].href}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
        </div>

        <div className={classes.title}>
          <Typography variant="subtitle2" gutterBottom color="textSecondary">
            Level {breadCrumbs.length - 1}
          </Typography>
          <Typography variant="h4" noWrap>
            {breadCrumbs?.length &&
              breadCrumbs[breadCrumbs.length - 1].breadcrumb}
          </Typography>
        </div>
      </Toolbar>
    </MUIAppbar>
  );
}
