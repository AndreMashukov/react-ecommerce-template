import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Store from './store/Store';
import { Layout } from './shared/Layout'

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