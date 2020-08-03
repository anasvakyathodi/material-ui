import React from "react";
import Header from "./Layout/Header";
import Content from "./Content";
import { Grid } from "@material-ui/core";
export default function App() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid container item>
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
