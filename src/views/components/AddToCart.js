import React from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import ModalContext from '../../store/ModalContext';
import { ProductActualPrices } from '../../shared/Utils';

function SetPrice(product, qty, setState) {
  const data = CalcQtyPrice(product, qty);
  setState({ qty_false: qty, qty: data.qty, final_price: data.price });
}

async function DispatchToCart(cart, action, setState, modal) {
  await cart.dispatch(action);
  modal({
    type: 'modal',
    title:
      'Item ' +
      (action.type == 'addsample' || action.type == 'add'
        ? 'Added'
        : 'Removed'),
    message:
      'The item was ' +
      (action.type == 'addsample' || action.type == 'add'
        ? 'added to'
        : 'removed from') +
      ' your cart!',
    buttons: [
      <Link to="/cart">
        <button className="btn btn-primary">View Cart</button>
      </Link>,
      <button className="btn btn-secondary" data-dismiss="modal">
        Ok
      </button>
    ]
  });
}

function CalcQtyPrice(prod, qty) {
  // returns actual price + qty based on product unit, etc
  const c_qty = prod.unit_cov ? Math.ceil(qty / prod.unit_cov) : qty;
  if (prod.price.pallet && qty >= 1000) {
    return {
      qty: c_qty,
      price: Math.round(prod.price.pallet * c_qty * 100) / 100
    };
  } else {
    return {
      qty: c_qty,
      price: Math.round(prod.price.price * c_qty * 100) / 100
    };
  }
}

export default props => {
  let { product } = props;

  const [state, setState] = React.useState({
    qty: 1,
    qty_false: 1,
    final_price: CalcQtyPrice(product, 1).price,
    loading: false
  });

  return (
    <ModalContext.Consumer>
      {modal => (
        <CartContext.Consumer>
          {cart => {
            const Pricing = ProductActualPrices(product);
            return (
              <div class="add-to-cart row">
                <div class="col-6 py-2">
                  {
                    <div class="pricing">
                      <p class="price font-weight-bold sf-color-orange">
                        ${Pricing.price}
                      </p>
                    </div>
                  }
                </div>
                <div class="col-12 calculate-input">
                  <div class="form-group row mb-0">
                    <label class="col align-self-center col-form-label">
                      Desired:
                    </label>
                    <div class="col">
                      <input
                        size={5}
                        onChange={event =>
                          SetPrice(product, event.target.value, setState)
                        }
                        value={state.qty_false}
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div class="col-6 align-self-center">
                      Equivalent to <b>{state.qty}</b> units.
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <p class="mb-2">
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
                        setState,
                        modal
                      )
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          }}
        </CartContext.Consumer>
      )}
    </ModalContext.Consumer>
  );
};
