import React from 'react';
import CartContext from '../store/CartContext';

import { CartPricing, FormatPrice } from '../shared/Utils';

function RemoveItem(cart, item_id) {
  cart.dispatch({ type: 'remove', item_id: item_id });
}

export const CartView = () => {
  return (
    <CartContext.Consumer>
      {cart => {
        return cart.data.cart.items === undefined ? null : (
          <div>
            <div class="product-header">
              <div class="container">
                <h1>Your Cart</h1>
              </div>
            </div>
            <div id="cart-display-main" class="mb-4 p-2 container">
              <div class="row">
                <div class="col-9">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.data.cart.items.map(item => {
                        return (
                          <tr key={item.item_id}>
                            <td></td>
                            <th>{item.local.title}</th>
                            <td>
                            </td>
                            <td>${item.total_price}</td>
                            <td
                              onClick={() => RemoveItem(cart, item.item_id)}
                              role="button"
                            >
                              Remove
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div class="col-3">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Subtotal:
                      <span class="float-right">
                        {FormatPrice(CartPricing('subtotal', cart.data.cart))}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};
