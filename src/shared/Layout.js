import React from 'react';
import { Landing } from './Landing/Landing';
import { NavBarSection } from './NavBar/NavBar';
import { Typography } from '@material-ui/core';

export const Layout = () => {
  return (
      <Typography noWrap>
        <NavBarSection />
        <Landing />
      </Typography>
  )
}