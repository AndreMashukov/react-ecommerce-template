export function ProductActualPrices(prod) {
  // returns actual prices + unit for product
  return {
    unit: 1,
    price: prod.price
  };
}

export function FormatPrice(price) {
  // Format price, return $ + 2 decimals
  if (price === null) return '$0.00';
  return '$' + Number(price).toFixed(2);
}
