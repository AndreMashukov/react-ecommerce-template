import React from 'react';
import { ProductItem } from '../shared/product/ProductItem';
import { Route, Switch } from 'react-router-dom';
import { PRODUCTS } from '../global-definitions';

import StoreContext from '../store/StoreContext';

export const ProductListView = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      sections: {},
      categories: []
    };
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            path={`${this.props.match.url}/:categoryName`}
            component={ProductListSubView}
          />
          <Route
            exact
            path={`${this.props.match.url}`}
            component={ProductListSubView}
          />
        </Switch>
      </div>
    );
  }
};

const ProductListSubView = class extends React.Component {
  static contextType = StoreContext;
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
    };
  }
  
  componentDidMount = async () => {
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="row flex-row-reverse">
            <div className="col-lg-6 p-4">
              <ul className="list-inline row">
                {this.state.products.map(product => (
                  <ProductItem key={product.product_id} product={product} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
