import React from 'react';

import { Header } from '../views/Header';
import { NavBar } from './NavBar';
import { Landing } from './Landing';

export const Layout = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <Landing />
    </div>
  )
}