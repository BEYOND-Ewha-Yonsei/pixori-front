import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Section from "../theFront/Section";
import SectionAlternate from "../theFront/SectionAlternate";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  purple: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SectionAlternate className={classes.purple}>A</SectionAlternate>
      <Section>B</Section>
      <SectionAlternate>C</SectionAlternate>
      <Section>D</Section>
    </div>
  );
};

export default Home;
