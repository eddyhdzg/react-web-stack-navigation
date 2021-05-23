import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page_main: {
      padding: "40px",
      width: "100%",
    },
    page_root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: "auto",
    },
  })
);
const Page: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.page_main}>
      <Paper className={classes.page_root}>{children}</Paper>
    </main>
  );
};

export default Page;
