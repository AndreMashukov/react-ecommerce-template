import React from 'react';
import { Landing } from './Landing';
import { NavBarSection } from './NavBar';

export const Layout = () => {
  return (
    <div>
        <NavBarSection />
        <Landing />
    </div>
  )
}