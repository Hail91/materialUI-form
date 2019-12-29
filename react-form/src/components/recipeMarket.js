import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard';
import ChefCard from './ChefCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  chefCont: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
  },
  recipeCont: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
  },
}));

export default function RecipeMarket() {
  const classes = useStyles();

  function ContainerRow() {
    return (
      <React.Fragment>
        <Grid className={classes.chefCont} item xs={6}>
          <ChefCard />
          <ChefCard />
          <ChefCard />
          <ChefCard />
          <ChefCard />
          <ChefCard />
        </Grid>
        <Grid className={classes.recipeCont} item xs={6}>
          <RecipeCard />
          <RecipeCard />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
        <h1>Chef Portfolio</h1>
      <Grid container spacing={6}>
        <Grid container item xs={12} spacing={3}>
          <ContainerRow />
        </Grid>
      </Grid>
    </div>
  );
}
