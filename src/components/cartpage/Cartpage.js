import React, { useContext, useState } from 'react';
import { ReducerContext } from '../../context/AuthContext';
import './CartPage.css';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { cart, dispatch } = useContext(ReducerContext);
  const [showRemoveItemModal, setShowRemoveItemModal] = useState(false);
  const [showClearCartModal, setShowClearCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });
  };

  const handleRemoveClick = (product) => {
    setSelectedProduct(product);
    setShowRemoveItemModal(true);
  };

  const handleModalConfirm = () => {
    removeFromCart(selectedProduct);
    setShowRemoveItemModal(false);
  };

  const handleModalCancel = () => {
    setShowRemoveItemModal(false);
    setShowClearCartModal(false);
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
    setShowClearCartModal(false);
  };


  const totalPrice = cart.reduce((val, item) => val + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="button-items">
        <Link to={'/'}>
          <button className="backbutton">Back</button>
        </Link>
        <button className="Deletebutton" onClick={() => setShowClearCartModal(true)}>
          Remove All
        </button>
      </div>

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Please add products</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: {item.price}</p>

              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item)}>+</button>
              </div>

              <p>Total: {(item.price * item.quantity).toFixed(2)}</p>

              <button onClick={() => handleRemoveClick(item)}>Remove</button>
            </div>
          ))}

          <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
        </>
      )}


      {showRemoveItemModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to remove this product?</h3>
            <div className="modal-actions">
              <button className="model-remove" onClick={handleModalConfirm}>
                Yes
              </button>
              <button className="model-unremove" onClick={handleModalCancel}>
                No
              </button>
            </div>
          </div>
        </div>
      )}


      {showClearCartModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to clear the cart?</h3>
            <div className="modal-actions">
              <button className="model-remove" onClick={removeAllFromCart}>
                Yes
              </button>
              <button className="model-unremove" onClick={handleModalCancel}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


