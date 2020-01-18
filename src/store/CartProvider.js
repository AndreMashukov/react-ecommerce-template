import React from 'react';
import CartContext from './CartContext';
import StoreContext from './StoreContext';
import Cart from './reducers/Cart';

async function CartReducer(state, action, callback) {
  console.log('state=', state);
  let result = {};
  try {
    switch (action.type) {
      case 'get':
        result = state;
        break;
      case 'add':
        result = Cart.add(state, action.item_id, action.qty);
        break;
      case 'remove':
        result = Cart.remove(action.item_id);
        break;
      default:
        result = state;
    }
  } catch (e) {
    return false;
  }
  console.log('result=', result);
  callback(result);
}
export default class extends React.Component {
  static contextType = StoreContext;
  constructor(props) {
    super(props);
    this.state = {
      cart: {
        items: [
        ]
      }
    };
  }
  componentDidMount() {
    // Get initial cart
    CartReducer(this.state, { type: 'get' }, s => {
      console.log('cb1', s);
      this.setState(s);
    });
  }
  render() {
    return (
      <CartContext.Provider
        value={{
          data: this.state,
          dispatch: action =>
            CartReducer(this.state, action, s => {
              console.log('cb2', s);
              this.setState(s);
            })
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
