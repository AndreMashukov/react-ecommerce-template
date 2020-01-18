import React from 'react';
import AddToCart from './components/AddToCart';
import { PRODUCTS } from '../global-definitions';

export const ProductShowView = class extends React.Component {
  state = {
    product: null,
    selected_img: 0
  }
  componentDidMount = async () => {
    this.getProduct();
  }
  getProduct = async () => {
    const key = this.props.match.params.productKey;
    const product = PRODUCTS.find(p => p.item_id.toString() === key.toString());
    this.setState({ product: product });
  }
  render() {
    let prod = this.state.product;
    console.log('prod=', prod);
    return prod !== null ? (
      <div>
        <div class='container'>
          <h1>{prod.title}</h1>
        </div>
        <div class='container'>
          <h3>Details</h3>
          <p>{prod.details}</p>
        </div>        
        <div class='container'>
          <AddToCart product={prod} />
        </div>
      </div>
    ) : null
  }
}