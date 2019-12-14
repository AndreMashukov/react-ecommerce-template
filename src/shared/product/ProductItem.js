import React from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import ModalContext from '../../store/ModalContext';
import { ProductActualPrices } from '../../shared/Utils';

export const ProductItem = props => {
  let { product } = props;

  const pricing = ProductActualPrices(product);

  return (
    <ModalContext.Consumer>
      {modal => (
        <CartContext.Consumer>
          {cart => {
            return (
              <li class="col-6">
                <Link to={'/product/' + product.item_id}>
                  <div>
                    <h2 class="product-title font-weight-bold">
                      {product.name}
                    </h2>
                  </div>
                  <div>
                    <p class="price font-weight-bold float-right sf-color-orange">
                      ${pricing.price}
                    </p>
                  </div>
                </Link>
                <p class="product-title">{product.collection_name}</p>
              </li>
            );
          }}
        </CartContext.Consumer>
      )}
    </ModalContext.Consumer>
  );
};
