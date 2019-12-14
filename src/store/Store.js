import React from 'react';

import StoreProvider from './StoreProvider';
import CartProvider from './CartProvider';
import ModalProvider from './ModalProvider';

const Store = class extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ModalProvider>
        <StoreProvider>
            <CartProvider>
              {this.props.children}
            </CartProvider>
        </StoreProvider>
      </ModalProvider>
    )
  }
};

export default Store;
