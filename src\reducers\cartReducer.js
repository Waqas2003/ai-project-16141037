import { FETCH_CART } from '../actions/types';

const initialState = {
  cart: {}
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}