import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import StartupSchoolCard from "./StartupSchoolCard";
import TechnicalTrackCard from "./TechnicalTrackCard";
import ProductionCard from "./ProductionCard";
import ProfileCard from "./ProfileCard";
import DiscoverCard from "./DiscoverCard";
import CheckList from "./ChecklistCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Your Progress */}
      <Grid container spacing={3}>
        <Grid item md={4}>
          <StartupSchoolCard title={"Startup School"} />
        </Grid>
        <Grid item md={4}>
          <TechnicalTrackCard title={"Technical Track"} />
          {/* <PhaseComponent title={"Technical Track"} /> */}
        </Grid>
        <Grid item md={4}>
          <ProductionCard title={"Production Project"} />
          {/* <PhaseComponent title={"Production"} /> */}
        </Grid>
      </Grid>
      {/* Other Progress */}
      <Grid container spacing={3}>
        <Grid item md={3}>
          <ProfileCard />
        </Grid>
        <Grid item md={6}>
          <DiscoverCard />
        </Grid>
        <Grid item md={3}>
          <CheckList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
