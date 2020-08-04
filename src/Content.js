import React, { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles({
  root: {
    marginTop: "3rem",
  },
  loading: {
    marginTop: "35vh",
  },
});
function Content() {
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/anasvakyathodi/repos")
      .then(function (response) {
        setRepos(response.data);
        console.log(response.data);
      })
      .then(() => {
        setLoaded(true);
      });
  }, []);

  return loaded === true ? (
    <Grid container spacing="4" className={classes.root}>
      {repos.map((repo) => (
        <Grid item md="4" sm="6" xs="12">
          <CoffeeCard
            {...{
              avatarUrl: repo.owner.avatar_url,
              gitUrl: repo.html_url,
              name: repo.name,
              description: repo.description,
              date: repo.created_at,
              owner: repo.owner.login,
            }}
          />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item sm="auto" className={classes.loading}>
        <CircularProgress type="spin" style={{ color: "#2292a4" }} />
      </Grid>
    </Grid>
  );
}

export default Content;
