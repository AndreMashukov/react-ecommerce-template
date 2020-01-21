import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const HomeView = class extends React.Component {
  componentDidMount = async () => {};

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h6" color="primary">
            Home
          </Typography>
        </Grid>
      </Grid>
    );
  }
};
