import React from 'react';

import { Route, Switch } from "react-router-dom";
import { HomeView } from '../../views/Home';
import { ProductListView } from '../../views/ProductList';
import { ProductShowView } from '../../views/ProductShow';
import { CartView } from '../../views/Cart';
import PageNotFound from '../../views/PageNotFound';
import './Landing.scss';

export const Landing = () => {
  return (
    <div className ='landing-layout'>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/cart" component={CartView} />
        <Route path="/product-list" component={ProductListView} />
        <Route path="/product-show" component={ProductShowView} />
        <Route path="/:categoryKey/:productKey" component={ProductShowView} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}