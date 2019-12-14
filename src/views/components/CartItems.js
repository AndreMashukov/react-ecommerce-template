import React from 'react';

export default ({ cart1 }) => {
  // later make this central
  const cart = {
    items: [
      {
        item_id: 1,
        local: {
          title: 'Title'
        },
        total_price: 10
      }
    ]
  };
  return cart.items !== undefined ? (
    <tbody>
      {cart.items.map(item => {
        return (
          <tr key={item.item_id}>
            <th>{item.local.title}</th>
            <td>{item.qty}</td>
            <td>${item.total_price}</td>
          </tr>
        );
      })}
    </tbody>
  ) : null;
};
