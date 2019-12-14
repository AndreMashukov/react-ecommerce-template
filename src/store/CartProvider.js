import React from 'react';

import { setCartCookie } from '../api/cookie';
import CartContext from './CartContext';
import StoreContext from './StoreContext';
import ModalContext from './ModalContext';

import Cart from '../api/cart';

async function CartReducer(state, store, action, modal, callback) {
  // async dispatcher for cart commands

  if (action.type != 'setdispatcher' && state.cart_id == null) {
    const cart = await Cart.new(store.data.store_id);
    setCartCookie(cart.cart_id);
    state.cart_id = cart.cart_id;
  } // get a quote if none
  let result = {};
  try {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'new': // create a brand new cart
        result = await Cart.new(store.data.store_id);
        setCartCookie(result.cart_id);
        callback({ cart_id: result.cart_id, cart: result });
        return;
      case 'sync': // get synced cart and update the state
        result = await Cart.getSynced(state.cart_id);
        break;
      case 'get': // get synced cart and update the state
        result = await Cart.get(state.cart_id);
        break;
      case 'add': // add an item to the cart
        result = await Cart.add(state.cart_id, action.item_id, action.qty);
        break;
      case 'update': // update an item from the cart
        result = await Cart.update(state.cart_id, action.item_id, action.qty);
        break;
      case 'remove': // remove an item from the cart
        result = await Cart.remove(state.cart_id, action.item_id);
        break;
    }
  } catch (e) {
    //if(modal) modal({type:'modal', title: 'Cart Error', message: e, buttons: []});
    return false;
  }
  if (result && result.error) {
    // we have a problem
    if (modal)
      modal({
        type: 'modal',
        title: 'Cart Error',
        message: result.error,
        buttons: null
      });
  } else if (result && result.item_count !== undefined) {
    // must be a cart
    callback({ cart_id: state.cart_id, cart: result });
  }
  return result; // also return it for stuff like placeorder
}
export default class extends React.Component {
  static contextType = StoreContext;
  constructor(props) {
    super(props);
    this.state = {
      cart: { data: { cart: {} } },
    };
  }
  componentDidMount() {
    // Get initial cart
    CartReducer(this.state, this.context, { type: 'get' }, null, s => {
      this.setState(s);
    });
  }
  render() {
    return (
      <StoreContext.Consumer>
        {store => (
          <ModalContext.Consumer>
            {modal => (
              <CartContext.Provider
                value={{
                  data: this.state,
                  dispatch: action =>
                    CartReducer(this.state, store, action, modal, s => {
                      this.setState(s);
                    })
                }}
              >
                {this.props.children}
              </CartContext.Provider>
            )}
          </ModalContext.Consumer>
        )}
      </StoreContext.Consumer>
    );
  }
}
