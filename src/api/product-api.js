const products = JSON.parse(localStorage.getItem('products'));

export const getProductsByPage = (page, filters) => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

export const getProduct = product_id => {
  return new Promise((resolve, reject) => {
    const product = products.products.find(p => p.item_id.toString() === product_id.toString());
    resolve(product);
  });
};

export const getProductCategories = () => {
  return new Promise((resolve, reject) => {
    resolve({
      categories: [
        {
          item_category_id: 1,
          name: 'Consumer Electronics',
          slug: 'consumer-electronics',
          children: [
            {
              item_category_id: 2,
              name: 'Earphone & Headphone',
              parent_id: 1,
              slug: 'earphone-and-headphone'
            }
          ]
        }
      ]
    });
  });
};
