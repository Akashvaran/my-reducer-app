import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ReducerContext } from '../../context/AuthContext';
import './ProductList.css';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cart, dispatch } = useContext(ReducerContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        const productAdded = isProductInCart(product.id);

        return (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} className="product-image" />
            <p>Price: ${product.price}</p>
            {productAdded ? (
              <button className='remove-cart' onClick={() => removeFromCart(product)}>Remove from Cart</button>
            ) : (
              <button className='addto-cart' onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        );
      })}
    </div>
  );
};
