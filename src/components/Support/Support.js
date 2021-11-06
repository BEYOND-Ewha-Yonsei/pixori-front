import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Section from "../theFront/Section";
import SectionAlternate from "../theFront/SectionAlternate";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

const Support = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SectionAlternate>Q&A</SectionAlternate>
      <Section>Privacy Policy</Section>
      <SectionAlternate>Terms of Service</SectionAlternate>
    </div>
  );
};

export default Support;
