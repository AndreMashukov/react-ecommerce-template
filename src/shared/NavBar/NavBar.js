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
          <div className="navbar-layout">
            {/* <Typography variant="h6" color="inherit"> */}
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Link to={'/'} className="navbar-anchor">
                  Home
                </Link>
              </Grid>
              <Grid item>
                {this.state.categories.map(cat => {
                  return (
                    <Link
                      key={cat}
                      className="navbar-anchor"
                      to={'/product-list/' + cat.slug}
                      data-hover="dropdown"
                    >
                      {cat.name}
                    </Link>
                  );
                })}
              </Grid>
              <Grid item>
                <Link className="navbar-anchor" to={'/cart'}>
                  Cart
                </Link>
              </Grid>
            </Grid>
            {/* </Typography> */}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
};
