import React from 'react';
import { Link } from "react-router-dom";
import { CATEGORIES } from '../global-definitions';

export const NavBarSection = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount = async () => {
    let cats = CATEGORIES;
    this.setState({ categories: cats });
  }
  render() {
    return (
      <nav class="navbar navbar-light bg-light" id='nav'>
          <ul class="navbar-nav">
            <li><a><Link to={"/"}>Home </Link></a></li>
            <li>
              <a>
                {this.state.categories.map((cat) => {
                  return (
                    <Link to={"/product-list/" + cat.slug} data-hover='dropdown'>{cat.name}</Link>
                  );
                })}
              </a>
            </li>
            <li><a><Link to={"/cart"}>Cart</Link></a></li>
          </ul>
      </nav>
    )
  }
}