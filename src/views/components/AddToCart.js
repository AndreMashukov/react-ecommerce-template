import React from 'react';
import CartContext from '../../store/CartContext';
import { ProductActualPrices } from '../../shared/Utils';

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
    qty_false: 1,
    final_price: product.price,
    loading: false
  });

  return (
    <CartContext.Consumer>
      {cart => {
        const Pricing = ProductActualPrices(product);
        return (
          <div class="container">
            <div class="row">
              <div>
                {
                  <p class="font-weight-bold sf-color-orange">
                    ${Pricing.price}
                  </p>
                }
              </div>
              <div class="container">
                <div class="form-group row mb-0">
                  <label>
                    Desired:
                  </label>
                  <input
                    style={{ width: 50, margin: 5 }}
                    size={5}
                    onChange={event =>
                      SetPrice(product, event.target.value, setState)
                    }
                    value={state.qty_false}
                    type="text"
                    class="form-control" />

                  <div>
                    Equivalent to <b>{state.qty}</b> units.
                      </div>
                </div>
              </div>
              <div>
                <p>
                  Final price: <b>${state.final_price}</b>
                </p>
                <button
                  class="btn btn-primary"
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
                    </button>
              </div>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};
