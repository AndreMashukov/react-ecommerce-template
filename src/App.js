import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Store from './store/Store';
import { Layout } from './shared/Layout'
import 'typeface-roboto';

class App extends React.Component {
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