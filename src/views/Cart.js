import React from 'react';
import CartContext from '../store/CartContext';

function RemoveItem(cart, item_id) {
  cart.dispatch({ type: 'remove', item_id: item_id });
}

export const CartView = () => {
  return (
    <CartContext.Consumer>
      {cart => {
        console.log('cart=', cart.data);
        return cart === undefined ? null : (
          <div>
            <div class="container">
              <h1>Your Cart</h1>
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
                            <th>{item.title}</th>
                            <td>
                              {item.qty}
                            </td>
                            <td>${item.price}</td>
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
              </div>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};
