import React from 'react';
import CartContext from '../../store/CartContext';
import { ProductActualPrices } from '../../shared/Utils';
import { Button, Grid, TextField } from '@material-ui/core';

function SetPrice(product, qty, setState) {
  setState({ qty_false: qty, qty: qty, final_price: product.price * qty });
}

async function DispatchToCart(cart, action, setState) {
  await cart.dispatch(action);
}

export default props => {
  let { product } = props;

  const [state, setState] = React.useState({
    qty: 1,
    final_price: product.price,
    qty_false: 1,
    loading: false
  });

  return (
    <CartContext.Consumer>
      {cart => {
        const Pricing = ProductActualPrices(product);
        return (
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>${Pricing.price}</Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="flex-start"
                spacing={3}
              >
                <Grid item>
                  <TextField
                    label="Desired"
                    variant="outlined"
                    value={state.qty_false}
                    onChange={event =>
                      SetPrice(product, event.target.value, setState)
                    }
                  />
                </Grid>
                <Grid item>
                  Equivalent to <b>{state.qty}</b> units.
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <p>
                Final price: <b>${state.final_price}</b>
              </p>
              <Button
                color="primary"
                onClick={() =>
                  DispatchToCart(
                    cart,
                    {
                      type: 'add',
                      item_id: product.item_id,
                      qty: state.qty
                    },
                    setState
                  )
                }
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        );
      }}
    </CartContext.Consumer>
  );
};
