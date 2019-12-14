import React from 'react';

import { CartDropdown } from './components/CartDropdown';
import StoreContext from '../store/StoreContext';

export const Header = () => {
  return (
    <StoreContext.Consumer>{(store) => 
    <header id='header'>
        <div class='container'>
            <div class='row'>
                <div class='col-12 d-none d-md-block'>
                </div>
                <div class='col-8 col-md-3 m-header-flex'>
                </div>
                <div class='col-4 col-md-6 m-header-flex position-md-relative justify-content-end'>
                    <CartDropdown />
                </div>
            </div>
        </div>
    </header>}
    </StoreContext.Consumer>
  )
}