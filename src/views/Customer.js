import React from 'react';
import { Link, Route, Switch, Redirect } from "react-router-dom";

export const CustomerView = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}/account`}>Account - </Link>
      <Link to={`${match.url}/address`}>Address - </Link>
      <Link to={`${match.url}/info`}>Information</Link>
      <Route
          exact
          path="/customer"
          render={() => <Redirect to="/customer/account" />} />
        <Route path={`${match.url}/:sectionName`} component={SubView} />
    </div>
  )
};

const SubView = ({ match }) => (
  <div>
    <h3>Section: {match.params.sectionName}</h3>
  </div>
);