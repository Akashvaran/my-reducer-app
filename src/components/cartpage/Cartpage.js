import React, { useContext } from 'react';
import { UserContext } from '../../context/AuthContext';
import './CartPage.css'
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { cart, dispatch } = useContext(UserContext);

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });
  };

  return (
    <div className="cart-page">
      
    <Link to={'/'}><button className='backbutton'>back</button></Link>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Please add products</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};
