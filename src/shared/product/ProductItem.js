import React from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import { ProductActualPrices } from '../../shared/Utils';

export const ProductItem = props => {
  let { product } = props;

  const pricing = ProductActualPrices(product);

  return (
    <CartContext.Consumer>
      {cart => {
        return (
          <li class="col-6">
            <Link to={'/product/' + product.item_id}>
              <div class="p-4 mb-4">
                <h2 class="font-weight-bold">
                  {product.name}
                </h2>
              </div>
              <div>
                <p class="font-weight-bold float-right">
                  ${pricing.price}
                </p>
              </div>
            </Link>
            <p>{product.collection_name}</p>
          </li>
        );
      }}
    </CartContext.Consumer>
  );
};
