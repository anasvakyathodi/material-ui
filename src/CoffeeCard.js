import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton, CardActions } from "@material-ui/core";
// import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
const useStyles = makeStyles({
  root: {
    minHeight: "15rem",
    minWidth: "10rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: "#2292a4",
  },
  linkIcon: {
    color: "#2292a4",
  },
});

function CoffeeCard(props) {
  const classes = useStyles();
  const { avatarUrl, name, date, description, gitUrl, owner } = props;
  const handleClick = (gitUrl) => {
    window.location.href = gitUrl;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        title={name.toUpperCase()}
        subheader={date.substring(0, 10)}
      />
      <CardContent>
        <Typography variant="subtitle1">
          Description:{"  "}
          {description != null
            ? `${description.substring(0, 20)}...`
            : "no description"}
        </Typography>
        <Typography variant="body2">Owner: {owner}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={() => handleClick(gitUrl)}>
          <GitHubIcon className={classes.linkIcon} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
