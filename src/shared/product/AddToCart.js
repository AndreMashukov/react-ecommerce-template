import React from 'react';

export const AddToCart = (props) => {
  let {
    product
  } = props;

  return (
    <div>
       {product.key}
    </div>
  )
}