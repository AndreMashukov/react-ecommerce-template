import React from 'react';
import { Landing } from './Landing/Landing';
import { NavBarSection } from './NavBar/NavBar';

export const Layout = () => {
  return (
    <div>
        <NavBarSection />
        <Landing />
    </div>
  );
};
