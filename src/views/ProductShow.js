import React from 'react';
import AddToCart from './components/AddToCart';
import { PRODUCTS } from '../global-definitions';
import { Grid } from '@material-ui/core';

export const ProductShowView = class extends React.Component {
  state = {
    product: null
  };

  componentDidMount = async () => {
    this.getProduct();
  };
  getProduct = async () => {
    const key = this.props.match.params.productKey;
    const product = PRODUCTS.find(p => p.item_id.toString() === key.toString());
    this.setState({ product: product });
  };
  render() {
    let prod = this.state.product;

    return prod !== null ? (
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item>
          <h1>{prod.title}</h1>
        </Grid>
        <Grid item>
          <h3>Details</h3>
          <p>{prod.details}</p>
        </Grid>
        <Grid item>
          <AddToCart product={prod} />
        </Grid>
      </Grid>
    ) : null;
  }
};
