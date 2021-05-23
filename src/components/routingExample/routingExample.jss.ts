import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    routingExample_back: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    routingExample_backButton: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
  })
);

export default useStyles;
