import React from 'react';
import { Link } from 'react-router-dom';
import { ProductActualPrices } from '../../shared/Utils';
import { Grid, Typography } from '@material-ui/core';

export const ProductItem = props => {
  let { product } = props;

  const pricing = ProductActualPrices(product);

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item>
          <Link to={'/product/' + product.item_id}>
            <Typography variant="h6" color="primary">
              {product.name}
            </Typography>
          </Link>
        </Grid>
        <Grid item>${pricing.price}</Grid>
        <Grid item>{product.collection_name}</Grid>
      </Grid>
    </div>
  );
};
