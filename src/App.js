import React from "react";
import Header from "./Layout/Header";
import Content from "./Content";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  contentMargin: {
    marginTop: "3rem",
  },
});
export default function App() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid container item className={classes.contentMargin}>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </Grid>
    </>
  );
}
