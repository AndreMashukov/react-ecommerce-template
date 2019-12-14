import React from 'react';
import { getProductsByPage } from '../api/product-api';



export const HomeView = class extends React.Component {
  state = {
    products: []
  };

  componentDidMount = async () => {
    await this.getFeaturedProducts();
  };

  getFeaturedProducts = async () => {
    const products = await getProductsByPage(1, { featured: 1 });
    this.setState({ products: products.products.slice(0, 3) });
  };

  render() {
    return <div class="container">Home Page</div>;
  }
};
