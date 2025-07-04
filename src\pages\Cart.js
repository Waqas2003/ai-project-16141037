import React, { useState } from 'react';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('https://api.example.com/cart')
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {Object.keys(cart).map(productId => (
          <li key={productId}>
            {cart[productId].name} x {cart[productId].quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;