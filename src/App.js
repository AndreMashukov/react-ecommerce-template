import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Store from './store/Store';
import { Layout } from './shared/Layout'
import { PRODUCTS } from './global-definitions';

class App extends React.Component {
  componentDidMount() {
    localStorage.setItem('products', JSON.stringify(PRODUCTS));
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Store>
            <Layout />
          </Store>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;