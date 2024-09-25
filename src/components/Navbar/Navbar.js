import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReducerContext} from '../../context/AuthContext';
import { BsCart4 } from "react-icons/bs";
import './Navbar.css'

export const Navbar = () => {
  const { cart } = useContext(ReducerContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        My Store
      </Link>
      <Link to="/cart" className="cart">
        <BsCart4 className="cart-icon" />
        <span className="cart-count">{cart.length}</span>
      </Link>
    </nav>
  );
};
