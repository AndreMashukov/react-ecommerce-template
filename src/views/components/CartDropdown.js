import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

export const CartDropdown = () => {
  // const cart1 = React.useContext(CartContext);
  const cart = {
    data: {
      cart: {
        items: [
          {
            item_id: 1,
            local: {
              title: 'item1'
            },
            total_price: 10
          },
          {
            item_id: 2,
            local: {
              title: 'item2'
            },
            total_price: 20
          }
        ]
      }
    }
  };
  return (
    <div
      onMouseEnter={() => window.jQuery('#mini-cart').collapse('show')}
      onMouseLeave={() => window.jQuery('#mini-cart').collapse('hide')}
    >
      <div class="d-block d-md-none header-button align-center">
        <i class="fa fa-shopping-bag"></i>
      </div>
      <Link to="/cart">
        <button class="cart-input d-none d-md-block" type="button">
          <i class="fa fa-shopping-bag"></i> Cart
        </button>
      </Link>
      <div class="collapse" id="mini-cart">
        <table class="table">
          {cart.data &&
          cart.data.cart &&
          cart.data.cart.items &&
          cart.data.cart.items.length > 0 ? (
            <CartItems cart={cart.data.cart} />
          ) : (
            <li class="list-group-item">No Items in Cart.</li>
          )}
        </table>
        <div class="row">
          <div class="col-12">
            <Link to="/cart">
              <button class="w-100 btn btn-secondary rounded-top">
                View Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ); // nothing for now
};
