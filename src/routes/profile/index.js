import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ProfileComponent from "./profileComponent";
import CompanyComponent from "./companyComponent";
import SummaryComponent from "./summaryComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ProfileComponent />
          <SummaryComponent />
        </Grid>
        <Grid item xs={12} md={6}>
          <CompanyComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
