import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    routingExample_list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  })
);

export default useStyles;
