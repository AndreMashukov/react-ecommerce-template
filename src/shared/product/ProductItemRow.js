import React from 'react';
import CartContext from '../../store/CartContext';
import ModalContext from '../../store/ModalContext';
import { ProductActualPrices } from '../../shared/Utils';

export const ProductItemRow = props => {
  let { product } = props;

  const pricing = ProductActualPrices(product);

  return (
    <ModalContext.Consumer>
      {modal => (
        <CartContext.Consumer>
          {cart => {
            return (
              <div class="row">
                <div class="col">
                  <p class="price font-weight-bold float-right sf-color-orange">
                    ${pricing.price}
                    <small>{pricing.unit}</small>
                  </p>
                </div>
                <div class="col-8">
                  {product.collection_name} /{' '}
                  <h2 class="product-title font-weight-bold">{product.name}</h2>
                </div>
              </div>
            );
          }}
        </CartContext.Consumer>
      )}
    </ModalContext.Consumer>
  );
};
