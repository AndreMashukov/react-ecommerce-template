import React from 'react';
import CartContext from '../store/CartContext';
import { Button, Grid, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function RemoveItem(cart, item_id) {
  console.log("RemoveItem ", item_id);
  cart.dispatch({ type: 'remove', item_id: item_id });
}

export const CartView = () => {
  return (
    <CartContext.Consumer>
      {cart => {
        return cart === undefined ? null : (
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h6" color="primary">
                Your Cart
              </Typography>
            </Grid>
            <Grid item>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Product Name</TableCell>
                      <TableCell align="right">Qty</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.data.cart.items.map(row => (
                      <TableRow key={row.item_id}>
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.qty}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">
                          <Button
                            color="primary"
                            onClick={() => RemoveItem(cart, row.item_id)}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        );
      }}
    </CartContext.Consumer>
  );
};
