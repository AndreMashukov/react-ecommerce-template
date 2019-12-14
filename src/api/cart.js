import axios from 'axios';
import querystring from 'querystring';

function call(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${url}`)
      .then(resp => { 
        resolve(resp.data);
      })
      .catch(err => {
          console.log(err);
          reject(err);
      });
  
    });
}

function post(url, postdata) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/${url}`, querystring.stringify(postdata))
      .then(resp => { 
        resolve(resp.data);
      })
      .catch(err => {
          console.log(err);
          reject(err);
      });
  
    });
}

export default class {
    static async new(location_id) {
        // Get a new cart ID session from the API.
        return await call('cart/new?location_id=' + location_id);
    }
    static async add(cart_id, item_id, qty) {
        // return await call('cart/' + cart_id + '/add?item_id=' + item_id + '&qty=' + qty);
        return new Promise((resolve, reject) => {
          const cart = JSON.parse(localStorage.getItem('cart'));
          if (cart) {
            const item = cart.find(i => i.item_id.toString() === item_id.toString());
            if (!item) {
              cart.push({item_id: item_id, qty: qty});
            }
            localStorage.setItem('cart', JSON.stringify(cart));
          }
          else {
            const newCart = [];
            newCart.push({item_id: item_id, qty: qty});
            localStorage.setItem('cart', JSON.stringify(newCart));
          }
          resolve(null);
        })
    }
    static async get(cart_id) {
        console.log(cart_id);
        return await call('cart/' + cart_id + '/get');
    }
    static async getSynced(cart_id) {
        return await call('cart/' + cart_id + '/getSynced');
    }
    static async remove(cart_id, item_id) {
      return Promise((resolve, reject) => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const index = cart.findIndex(i => i.item_id === item_id);
        cart.splice(index, 1);
        resolve(null);
      })
    }
    static async update(cart_id, item_id, qty) {
        return await call('cart/' + cart_id + '/update?item_id=' + item_id + '&qty=' + qty);
    }
    static async setlocation(cart_id, location_id) {
        return await call('cart/' + cart_id + '/setlocation?location_id=' + location_id);
    }
    static async setship(cart_id, shipping) {

    }
    static async getship(cart_id, shipping) {
        const result = await call('cart/' + cart_id + '/getship?' + querystring.stringify(shipping));
        return await result;
    }
    static async placeorder(cart_id, payload) {
        const result = await post('cart/' + cart_id + '/placeorder', payload);
        return result;
    }
}