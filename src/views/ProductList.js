import React from 'react';
import { ProductItem } from '../shared/product/ProductItem';
import { Route, Switch } from 'react-router-dom';
import { getProductsByPage } from '../api/product-api';

import StoreContext from '../store/StoreContext';

export const ProductListView = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      user_filters: {},
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
      products: [],
    };
  }
  
  componentDidMount = async () => {
    await this.getProducts();
  };

  getProducts = async () => {
    this.setState({ loading: true, context_pgid: this.context.price_group_id }); // for tracking context changes
    const products = await getProductsByPage(
      this.state.page,
      Object.assign(
        { pgid: this.context.data.store.price_group_id },
        this.state.user_filters
      )
    ); // dynamic
    this.setState({
      products: products.products,
    });
  };
  objComp(obj1, obj2) {
    for (let i in obj1) {
      if (obj2[i] === undefined || obj2[i] != obj1[i]) return false;
    }
    for (let i in obj2) {
      // lol, do this properly later
      if (obj1[i] === undefined || obj2[i] != obj1[i]) return false;
    }
    return true;
  }
  componentDidUpdate = async (prevProps, prevState, snapshot) => {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        user_filters: { cat_name: this.props.match.params.categoryName }
      });
    } else if (
      !this.objComp(prevState.user_filters, this.state.user_filters) ||
      prevState.page != this.state.page ||
      (this.state.context_pgid !== undefined &&
        this.state.context_pgid != this.context.data.price_group_id)
    ) {
      await this.getProducts();
    }
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="row flex-row-reverse">
            <div className="col-md-9 p-4">
              <ul className="list-inline row product-items">
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
