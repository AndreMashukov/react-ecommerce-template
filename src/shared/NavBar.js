import React from 'react';
import { Link } from "react-router-dom";
import { getProductCategories } from '../api/product-api';

export const NavBar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount = async() => {
    let cats = await getProductCategories();
    this.setState({categories: cats.categories});
  }
  render() {
    return (
      <div class='nav collapse' id='nav'>
        <div class='container'>
          <ul class='level-0 list-inline mb-0 mt-3'>
            {this.state.categories.map((cat) => {
              return (<li class='list-inline-item m-0 dropdown'>
                <Link to={"/product-list/" + cat.slug} data-hover='dropdown'>{cat.name}</Link>
                {cat.children && cat.children.length > 0 ? (
                  <ul class='level-1 dropdown-menu'>
                    {cat.children.map((subcat) => (
                      <li>
                        <Link to={"/product-list/" + subcat.slug}>{subcat.name}</Link>
                      </li>
                    ))}
                  </ul>
                ) : ''}
              </li>);
            })}
          </ul>
        </div>
      </div>
    )
  }
}