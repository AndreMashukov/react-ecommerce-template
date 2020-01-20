import React from 'react';
import { ProductItem } from '../shared/product/ProductItem';
import { Route, Switch } from 'react-router-dom';
import { PRODUCTS } from '../global-definitions';
import { Grid } from '@material-ui/core';

import StoreContext from '../store/StoreContext';

export const ProductListView = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      sections: {},
      categories: []
    };
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            path={`${this.props.match.url}/:categoryName`}
            component={ProductListSubView}
          />
          <Route
            exact
            path={`${this.props.match.url}`}
            component={ProductListSubView}
          />
        </Switch>
      </div>
    );
  }
};

const ProductListSubView = class extends React.Component {
  static contextType = StoreContext;
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS
    };
  }

  componentDidMount = async () => {};

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {this.state.products.map(product => (
            <Grid item xs={2} spacing={3}>
              <ProductItem key={product.product_id} product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
};
