import React, { useContext, useState } from 'react';
import { ReducerContext } from '../../context/AuthContext';
import './CartPage.css';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { cart, dispatch } = useContext(ReducerContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });
  };


  const handleRemoveClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };


  const handleModalConfirm = () => {
    removeFromCart(selectedProduct);
    setShowModal(false);
  };


  const handleModalCancel = () => {
    setShowModal(false);
  };

  const increaseQuantity = (product) => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: product,
    });
  };

  const decreaseQuantity = (product) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: product,
    });
  };

  const removeAllFromCart = () => {
    dispatch({
      type: 'REMOVE_ALL_FROM_CART',
    });
  };

  return (
    <div className="cart-page">
      <div className='button-items'>
        <Link to={'/'}><button className='backbutton'>Back</button></Link>
        <button className='Deletebutton' onClick={removeAllFromCart}>Remove All</button>
      </div>

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Please add products</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item)}>+</button>
            </div>


            <button onClick={() => handleRemoveClick(item)}>Remove</button>
          </div>
        ))
      )}


      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to remove this product?</h3>
            <div className="modal-actions">
              <button className='model-remove' onClick={handleModalConfirm}>Yes</button>
              <button className='model-unremove' onClick={handleModalCancel}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

