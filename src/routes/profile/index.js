import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height: "100vh",
  },
  // maybe no need for this, just keep flexible until shit is filled
  gridContainer: {
    height: "500px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className={classes.gridContainer}>
          <Paper className={classes.paper}>xs=16</Paper>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridContainer}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridContainer}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.gridContainer}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} md={3} className={classes.gridContainer}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
