import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

interface IRouteListProps {
  RouteListLink: React.FC<IListItemLink>;
}

interface IListItemLink {
  to: string;
  text: string;
}

const RouteListLink: React.FC<IListItemLink> = ({ to, text }) => {
  return (
    <ListItem button component={Link} to={to}>
      <ListItemText primary={text} />
      <ChevronRightRoundedIcon />
    </ListItem>
  );
};

const RouteList: React.FC & IRouteListProps = ({ children }) => {
  return (
    <List component="nav" aria-label="list router navigation">
      {children}
    </List>
  );
};

RouteList.RouteListLink = RouteListLink;

export default RouteList;
