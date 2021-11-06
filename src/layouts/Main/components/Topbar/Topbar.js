import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Image from "../../../../components/theFront/Image";

const useStyles = makeStyles((theme) => ({
  root: {},
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    maxWidth: 1236,
    width: "100%",
    margin: "0 auto",
    height: "112px",
    padding: theme.spacing(0, 2),
  },
  listItem: {
    cursor: "pointer",
    paddingTop: 0,
    paddingBottom: 0,
    color: "#846cff",
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    textDecoration: "none",
  },
  listItemButton: {
    width: "185px",
    height: "55px",
    borderRadius: 0,
    marginRight: 20,
    "&:hover": {
      background: "transparent",
    },
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
}));

const Topbar = (props) => {
  const { onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="PIXORI">
          <Image
            className={classes.logoImage}
            src="/img/logo.png"
            alt="PIXORI"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.listItemText}
              component="a"
              href="/home"
            >
              Home
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.listItemText}
              component="a"
              href="/drawing"
            >
              Drawing
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.listItemText}
              component="a"
              href="/support"
            >
              Support
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button variant="contained" className={classes.listItemButton}>
              Login
            </Button>
            <Button
              variant="containedSecondary"
              className={classes.listItemButton}
            >
              Signup
            </Button>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
