import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
      position: "fixed",
      width: "100%",
      '& [class*="-label"]': {
        opacity: 0,
        fontSize: "0.75rem",
      },
    },
  })
);

export default useStyles;
