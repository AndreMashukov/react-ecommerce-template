import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { CATEGORIES } from '../../global-definitions';
import './NavBar.scss';

export const NavBarSection = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount = async () => {
    let cats = CATEGORIES;
    this.setState({ categories: cats });
  };
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <div class="navbar-layout">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={2} spacing={3}>
                  <Link to={'/'} className="navbar-anchor">
                    Home
                  </Link>
                </Grid>
                <Grid item xs={8} spacing={3}>
                  <Link to={'/'}>
                    {this.state.categories.map(cat => {
                      return (
                        <Link
                          className="navbar-anchor"
                          to={'/product-list/' + cat.slug}
                          data-hover="dropdown"
                        >
                          {cat.name}
                        </Link>
                      );
                    })}
                  </Link>
                </Grid>
                <Grid item xs={2} spacing={3}>
                  <Link className="navbar-anchor" to={'/cart'}>
                    Cart
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
};
