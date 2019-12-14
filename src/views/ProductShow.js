import React from 'react';
import { getProduct } from '../api/product-api';
import AddToCart from './components/AddToCart';

export const ProductShowView = class extends React.Component {
  state = {
    product: null,
    selected_img: 0
  }
  componentDidMount = async() => {
    await this.getProduct();
  }
  getProduct = async() => {
    const prd = await getProduct(this.props.match.params.productKey);
    console.log(prd);
    this.setState( { product: prd });
  }
  render() {
    let prod = this.state.product;
    return prod !== null ? (
      <div class='product'>
        <div class='product-header'>
          <div class='container'>
            <h1>{ prod.title }</h1>
          </div>
        </div>
        <div class='product-data'>
          <div class='container'>
            <div class='row'>
              <div class='col-12 col-md-8 price-add-to-cart'>
                <AddToCart product={prod} />
              </div>
            </div>
          </div>
        </div>
        <div class='product-full-data'>
          <div class='container'>
            <div class='row'>
              <div class='col-12'>
                <h3>Details</h3>
                <p class='product-details'>
                  { prod.details }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  }
}