import React from "react";
// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Import Components
import StartupCurrCard from "./StartupCurrCard";
import TechnicalCurrCard from "./TechnicalCurrCard";
import CurrHeader from "./CurrHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Curriculum = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <CurrHeader />
        </Grid>
        <Grid item md={4}>
          <StartupCurrCard />
        </Grid>
        <Grid item md={4}>
          <TechnicalCurrCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Curriculum;
