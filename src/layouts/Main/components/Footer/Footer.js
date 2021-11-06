import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, List, ListItem } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

import Image from "../../../../components/theFront/Image";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f7fa",
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: 1236,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  socialIcon: {
    backgroundColor: "#846cff",
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
}));

const Footer = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <List disablePadding>
          <ListItem disableGutters>
            <IconButton className={classes.socialIcon}>
              <FacebookIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <InstagramIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <TwitterIcon className={classes.icon} />
            </IconButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
