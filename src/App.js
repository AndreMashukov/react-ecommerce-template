import React from 'react';
import './App.scss';
import jQuery from 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from "react-router-dom";
import Store from './store/Store'
import { Layout } from './shared/Layout'
import { Footer } from './views/Footer'

window.jQuery = jQuery;
class App extends React.Component {
  componentDidMount() {
    document.title = 'Ecommerce Template';
    localStorage.setItem('products', JSON.stringify({
      products: [
        {
          item_id: 1,
          key: 'walkie-talkie-wireless-earpiece',
          collection_name: 'Earphone & Headphone',
          name: 'Walkie Talkie',
          details: 'Sports Earphone, Swimming headset, Bone conduction headset',
          title: 'Walkie Talkie Wireless Earpiece',
          price: {
            price: 60
          }            
        },
        {
          item_id: 2,
          key: 'mini-stealth-stereo',
          collection_name: 'Earphone & Headphone',
          name: 'Mini Stealth Stereo',
          details: 'True Wireless Bluetooth Headphones Earphone RV11 with mic',
          title: 'Mini Stealth Stereo',
          price: {
            price: 10
          }           
        }
      ]
  }));

  }
  render() {
    return (
        <div className="App">
            <BrowserRouter>
              <Store>
                <Layout />
                <Footer />
              </Store>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
