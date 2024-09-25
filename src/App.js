import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { ProductList } from './components/product/Productlist';
import { CartPage } from './components/cartpage/Cartpage';
import { ReducerProvider } from './context/AuthContext';

function App() {
  return (
    <ReducerProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} /> 
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      </BrowserRouter>
    </ReducerProvider>
  );
}

export default App;
