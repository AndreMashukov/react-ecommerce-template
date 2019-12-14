import React from 'react';
import { getStoreIDCookie, setStoreIDCookie } from '../api/cookie';
import StoreContext from './StoreContext';
import ModalContext from './ModalContext';

const Store = class extends React.Component {
  static contextType = ModalContext;
  constructor(props) {
    super(props);

    this.setStore = async (store_id, show_modal = true) => {
      let storeData = await this.getStoreAPI(store_id);
      this.setState({
        store: {
          setStore: this.setStore,
          data: { store: storeData, store_id: storeData.location_id }
        }
      });
      setStoreIDCookie(store_id);
      if (show_modal && this.context) {
        this.context({
          type: 'modal',
          title: 'Store updated',
          message: 'Welcome!',
          buttons: [
            <button className="btn btn-secondary" data-dismiss="modal">
              Ok
            </button>
          ]
        });
      }
    };

    this.state = {
      store: {
        setStore: this.setStore,
        data: { store: {}, store_id: getStoreIDCookie() }
      }
    }; // get initial cookies for startup
  }
  componentDidMount = async () => {};
  render() {
    return (
      <StoreContext.Provider value={this.state.store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
};

export default Store;
