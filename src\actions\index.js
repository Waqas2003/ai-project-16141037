import axios from 'axios';

export const fetchProducts = () => async dispatch => {
  const response = await axios.get('https://api.example.com/products');
  dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
};

export const fetchCart = () => async dispatch => {
  const response = await axios.get('https://api.example.com/cart');
  dispatch({ type: 'FETCH_CART', payload: response.data });
};

export const checkout = () => async dispatch => {
  const response = await axios.post('https://api.example.com/checkout');
  dispatch({ type: 'CHECKOUT_SUCCESS', payload: response.data });
};