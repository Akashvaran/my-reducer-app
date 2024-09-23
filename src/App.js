import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { ProductList } from './components/product/Productlist';
import { CartPage } from './components/cartpage/Cartpage';
import { UserProvider } from './context/AuthContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} /> 
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
