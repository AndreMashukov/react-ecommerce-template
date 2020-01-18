
export function ProductActualPrices(prod) {
  // returns actual prices + unit for product
  return {
    unit: 1,
    price: prod.price
  };
}

export function CartPricing(type, cart) {
// Get specific cart price point
if(type == 'ship') {
  return cart.order ? cart.order.shipping : 0 + cart.sample ? cart.sample.shipping : 0 || 0;
}
else if(type == 'tax') {
  return cart.order ? cart.order.tax : 0 + cart.sample ? cart.sample.tax : 0 || 0;
}
else if(type == 'subtotal') {
  return (cart.order && cart.order.total || 0) - (cart.order ? cart.order.shipping : 0 + cart.sample ? cart.sample.shipping : 0 || 0) -  (cart.order ? cart.order.tax : 0 + cart.sample ? cart.sample.tax : 0 || 0);
}
else {
  return cart.order && cart.order.total || 0; // grand total;
}
}

export function FormatPrice(price) {
// Format price, return $ + 2 decimals
if(price === null) return '$0.00';
return '$' + Number(price).toFixed(2);
}

export function FormatPhone(phone) {
return !phone ? '' : '(' + phone.substr(0,3) + ') ' + phone.substr(3,3) + '-' + phone.substr(6);
}